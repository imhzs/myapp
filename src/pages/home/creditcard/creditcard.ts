import { Component, Injectable } from '@angular/core';
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
export class CreditCardPage
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

  // 金额
  amount: AmountOptions = {
    inputAmount: undefined,
    outputAmount: undefined
  };

  constructor(public navCtrl: NavController, public cardHelper: CardHelper, private auth: TAuthService, private homeService: HomeService) {
    this.Rate = App.UserInfo.rate;
    this.homeService.currentCards.subscribe(
      (cards) => {
        this.InitData();
      }
    );

    this.auth.currentUser.subscribe(
      (user) => {
        this.Rate = user.rate;
      }
    );
  }

  ionViewDidEnter() {
    this.auth.currentUser.subscribe(
      (data) => {
        if (!App.IsIdAuthed) {
          let alertOpts = {
            title: '温馨提示',
            message: '为了您的资金安全，首次刷卡需先完成身份认证',
            cssClass: 'text-left',
            buttons: [
              {
                text: '取消',
                role: 'cancel',
                handler: () => {
                  App.Nav.push('HomePage');
                }
              },
              {
                text: '确认',
                handler: () => {
                  App.Nav.push('AuthPage');
                }
              }
            ]
          };
          App.ShowAlert(alertOpts);
        }
      }
    );
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
    this.amount.outputAmount = Math.floor((this.amount.inputAmount * (1 - this.Rate / 100)) * 10) / 10;
  }

  // 确认提交
  ConfirmPay() {
    let date = new Date();
    let hour = date.getHours();
    if (hour < 9 || hour > 22) {
      App.ShowError('交易时间为9:00-22:00');
      return;
    }

    if (this.CreditCards.length == 0 || this.DepositCards.length == 0) {
      App.ShowError('请先添加银行卡和储蓄卡');
      return;
    }

    this.OnCahngeInputAmount();
    this.navCtrl.push('CheckoutPage', {creditCard: this.CurrentCreditCard, depositCard: this.CurrentDepositCard, amount: this.amount});
  }

  // 更换信用卡
  ChangeCreditCard() {
    App.ShowModal('ChangecardsPage', {data: this.CreditCards, t: CREDIT_CARD, curCardId: this.CurrentCreditCard.id}).then(
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
    App.ShowModal('ChangecardsPage', {data: this.DepositCards, t: DEPOSIT_CARD, curCardId: this.CurrentDepositCard.id}).then(
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
    this.navCtrl.push('AddCreditCardPage');
  }

  // 添加储蓄卡
  AddDepositCard() {
    this.navCtrl.push('AddDepositPage');
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
