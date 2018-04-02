import { Component, OnInit, Injectable } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { TAuthService } from '../../../providers/auth';
import { HomeService } from '../../../providers/homeservice';
import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';
import { CardModel } from '../../../models/card-model';
import { CardHelper, CREDIT_CARD, DEPOSIT_CARD } from '../../../shared/helper/card-helper';

@IonicPage()
@Component({
  selector: 'page-creditcard',
  templateUrl: 'creditcard.html'
})
@Injectable()
export class CreditCardPage implements OnInit
{
  App = window.App;

  // 费率
  Rate: number;

  // 信用卡
  CurrentCreditCard: CardModel;
  CreditCards = new Array<CardModel>();

  // 储蓄卡
  CurrentDepositCard: CardModel;
  DepositCards = new Array<CardModel>();

  HeadTitle: string = "刷卡提现";

  // 金额
  Amount: AmountOptions = {
    InputAmount: undefined,
    OutputAmount: undefined
  };

  constructor(public navCtrl: NavController, public cardHelper: CardHelper, private auth: TAuthService, private homeService: HomeService) {
    this.homeService.GetCardList();
    this.auth.currentUser.subscribe((data) => {
      this.InitData();
    })
  }

  ngOnInit() {  
  }

  // 初始化数据
  InitData() {
    this.CreditCards = this.cardHelper.filterCard(CREDIT_CARD);
    this.DepositCards = this.cardHelper.filterCard(DEPOSIT_CARD);
    this.CurrentCreditCard = this.cardHelper.getPrimaryCard(CREDIT_CARD);
    this.CurrentDepositCard = this.cardHelper.getPrimaryCard(DEPOSIT_CARD);

    console.log('CurrentCreditCard', this.CurrentCreditCard);

    if (!TypeInfo.Assigned(this.CurrentCreditCard) && this.CreditCards.length > 0) {
      this.CurrentCreditCard = this.CreditCards[0];
    }

    if (!TypeInfo.Assigned(this.CurrentDepositCard) && this.DepositCards.length > 0) {
      this.CurrentCreditCard = this.DepositCards[0];
    }
  }

  // 计算到账金额
  InputAmount() {
    if (!this.Amount.InputAmount) {
      this.Amount.OutputAmount = undefined;
      return;
    }
    this.Amount.OutputAmount = Math.floor((this.Amount.InputAmount * (1 - this.Rate / 100)) * 10) / 10;
  }

  // 确认提交
  ConfirmPay() {
    let date = new Date();
    let hour = date.getHours();
    if (hour < 9 || hour > 22) {
      App.ShowError('交易时间为9:00-22:00');
      return;
    }

    if ( this.CreditCards.length == 0 || this.DepositCards.length == 0 ) {
      App.ShowError('请先添加银行卡和储蓄卡');
      return;
    }

    this.InputAmount();
    this.navCtrl.push('CheckoutPage', {creditCard: this.CurrentCreditCard, depositCard: this.CurrentDepositCard, amount: this.Amount});
  }

  // 更换信用卡
  ChangeCreditCard() {
    App.ShowModal('ChangecardsPage', {data: this.CreditCards, t: CREDIT_CARD}).then((modal) => {
      modal.onDidDismiss((data) => {
        this.CurrentCreditCard = this.cardHelper.getCardById(data.id);
      })
    });
  }

  // 更换储蓄卡
  ChangeDepositCard() {
    App.ShowModal('ChangecardsPage', {data: this.DepositCards, t: DEPOSIT_CARD}).then((modal) => {
      modal.onDidDismiss((data) => {
        this.CurrentDepositCard = this.cardHelper.getCardById(data.id);
      })
    });
  }

  // 添加信用卡
  AddCreditCard() {
    this.navCtrl.push('AddCreditCardPage');
  }

  // 添加储蓄卡
  AddDepositCard() {
    this.navCtrl.push('AddDepositPage');
  }

  // 是否可以点击下一步
  get CanGoNext() {
    return TypeInfo.IsObject(this.CurrentCreditCard) && TypeInfo.IsObject(this.CurrentDepositCard) && this.Amount.InputAmount > 100;
  }
}

export interface AmountOptions
{
  InputAmount: number;
  OutputAmount: number;
}
