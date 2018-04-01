import { Component, OnInit, Injectable } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HomeService } from '../../../providers/homeservice';
import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';
import { CardModel } from '../../../models/card-model';
import { CardHelper, CREDIT_CARD, DEPOSIT_CARD } from '../../../shared/helper/CardHelper';

@IonicPage()
@Component({
  selector: 'page-creditCard',
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

  // 是否可以提交标识
  CanSubmited: boolean = false;

  constructor(public Service: HomeService, public navCtrl: NavController) {
    this.Rate = App.UserInfo.rate;
    this.InitData();
  }

  ngOnInit() {
  }

  // 初始化数据
  InitData() {
    this.CreditCards = CardHelper.filterCard(CREDIT_CARD);
    this.DepositCards = CardHelper.filterCard(DEPOSIT_CARD);
    this.CurrentCreditCard = CardHelper.getPrimaryCard(CREDIT_CARD);
    this.CurrentDepositCard = CardHelper.getPrimaryCard(DEPOSIT_CARD);

    if (!TypeInfo.Assigned(this.CurrentCreditCard) && this.CreditCards.length > 0) {
      this.CurrentCreditCard = this.CreditCards[0];
    }

    if (!TypeInfo.Assigned(this.CurrentDepositCard) && this.DepositCards.length > 0) {
      this.CurrentCreditCard = this.DepositCards[0];
    }
  }

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
    
    this.CanSubmited = true;

    this.Service.GetBankPage(this.CurrentCreditCard.id, this.CurrentDepositCard.id,this.Amount.InputAmount).then(res => {
      this.CanSubmited = false;

      // 跳转银联页面
      if(res) {
        if(res.indexOf('<html>') == -1) {
          let data = JSON.parse(res);
          App.ShowError(data.respMsg);
        } else {
          App.Nav.push(App.RootPage.FinalpayPage, {innerHtml: res});
        }
      } else {
        App.ShowError('系统异常，请尝试有积分提现, 或稍后再试');
      }
    });
  }

  // 更换信用卡
  ChangeCreditCard() {
    App.ShowModal('ChangecardsPage', {data: this.CreditCards, t: CREDIT_CARD}).then((modal) => {
      modal.onDidDismiss((data) => {
        this.CurrentCreditCard = CardHelper.getCardById(data.id);
      })
    });
  }

  // 更换储蓄卡
  ChangeDepositCard() {
    App.ShowModal('ChangecardsPage', {data: this.DepositCards, t: DEPOSIT_CARD}).then((modal) => {
      modal.onDidDismiss((data) => {
        this.CurrentDepositCard = CardHelper.getCardById(data.id);
      })
    });
  }

  // 添加信用卡
  AddCreditCard() {
    this.navCtrl.push('AddCreditPage');
  }

  // 添加储蓄卡
  AddDepositCard() {
    this.navCtrl.push('AddDepositPage');
  }
}

export interface AmountOptions
{
  InputAmount: number;
  OutputAmount: number;
}
