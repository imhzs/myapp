import { Component, Injectable, OnInit } from '@angular/core';
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

  // 页面标题
  HeadTitle: string = "刷卡提现";

  // 是否显示刷卡流程
  ShowFlow: boolean = false;

  // 金额
  amount: AmountOptions = {
    inputAmount: undefined,
    outputAmount: undefined
  };

  constructor(
    public navCtrl: NavController,
    public cardHelper: CardHelper,
    private auth: TAuthService,
    private homeService: HomeService
  ) {
    if (TypeInfo.Assigned(App.UserInfo) && !TypeInfo.IsEmptyObject(App.UserInfo)) {
      this.Rate = App.UserInfo.rate;
      if (!App.IsIdAuthed) {
        this.ShowFlow = true;
      }
    }
    
    this.homeService.currentCards.subscribe(
      cards => {
        this.InitData();
      }
    );

    this.auth.GetUserData();
    this.auth.currentUser.subscribe(
      (user) => {
        this.Rate = user.rate;
        if (!App.IsIdAuthed) {
          this.ShowFlow = true;
        }
      }
    );
  }

  ngOnInit() { 
  }

  ionViewDidEnter() {
    this.InitData();
  }

  ionViewCanEnter() {
    this.auth.CheckToken();
  }

  // 初始化数据
  InitData() {
    this.CreditCards = this.cardHelper.filterCard(CREDIT_CARD);
    this.DepositCards = this.cardHelper.filterCard(DEPOSIT_CARD);
    this.CurrentCreditCard = this.cardHelper.getPrimaryCard(CREDIT_CARD);
    this.CurrentDepositCard = this.cardHelper.getPrimaryCard(DEPOSIT_CARD);

    if (!TypeInfo.Assigned(this.CurrentCreditCard) && this.CreditCards.length > 0) {
      this.CurrentCreditCard = this.CreditCards[0];
    }

    if (!TypeInfo.Assigned(this.CurrentDepositCard) && this.DepositCards.length > 0) {
      this.CurrentCreditCard = this.DepositCards[0];
    }
  }

  // 计算到账金额
  OnCahngeInputAmount() {
    if (!this.amount.inputAmount) {
      this.amount.outputAmount = undefined;
      return;
    }
    this.amount.outputAmount = this.amount.inputAmount * (1 - this.Rate / 100) - 3;
  }

  // 确认提交
  ConfirmPay() {
    // 交易时间限制
    let date = new Date();
    let hour = date.getHours();
    if (hour < 8 || hour > 21) {
      App.ShowError('请在08:00-21:00时间内交易');
      return;
    }

    // 建议金额限制
    if (this.amount.inputAmount < 200 || this.amount.inputAmount > 20000) {
      App.ShowError('单笔金额为200-20000');
      return;
    }
    
    // 无银行卡
    if (this.CreditCards.length == 0 || this.DepositCards.length == 0) {
      App.ShowError('请先添加银行卡和储蓄卡');
      return;
    }

    this.OnCahngeInputAmount();
    this.navCtrl.push('CheckoutPage', {creditCard: this.CurrentCreditCard, depositCard: this.CurrentDepositCard, amount: this.amount});
  }

  // 更换信用卡
  ChangeCreditCard() {
    App.ShowModal('ChangecardsPage', {data: this.CreditCards, t: CREDIT_CARD, curCardId: this.CurrentCreditCard.id, title: '更换信用卡'}).then(
      (modal) => {
        modal.onDidDismiss((data) => {
          if (TypeInfo.Assigned(data) && TypeInfo.IsObject(data)) {
            this.CurrentCreditCard = this.cardHelper.getCardById(data.id);
          }
        });
      }
    );
  }

  // 更换储蓄卡
  ChangeDepositCard() {
    App.ShowModal('ChangecardsPage', {data: this.DepositCards, t: DEPOSIT_CARD, curCardId: this.CurrentDepositCard.id, title: '更换储蓄卡'}).then(
      (modal) => {
        modal.onDidDismiss((data) => {
          if (TypeInfo.Assigned(data) && TypeInfo.IsObject(data)) {
            this.CurrentDepositCard = this.cardHelper.getCardById(data.id);
          }
        });
      }
    );
  }

  // 添加信用卡
  AddCreditCard() {
    App.Nav.push(App.pages.addCreditCardPage, {page: App.pages.creditCardPage});
  }

  // 添加储蓄卡
  AddDepositCard() {
    App.Nav.push(App.pages.addDepositPage, {page: App.pages.creditCardPage});
  }

  // 关闭刷卡流程提醒
  OnCloseFlow() {
    this.ShowFlow = false;
  }

  // 是否可以点击下一步
  get CanGoNext() {
    return TypeInfo.IsObject(this.CurrentCreditCard) && TypeInfo.IsObject(this.CurrentDepositCard) && this.amount.inputAmount > 100;
  }
}

export interface AmountOptions
{
  inputAmount: number;
  outputAmount: number;
}
