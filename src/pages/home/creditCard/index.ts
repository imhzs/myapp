
import { Component, OnInit, Injectable } from '@angular/core';

import { HomeService } from '../../../providers/homeservice';
import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';
import * as Types from '../../../providers/types';

@Component({
  selector: 'page-creditCard',
  templateUrl: 'index.html'
})
@Injectable()
export class CreditCardPage implements OnInit
{
  App = window.App;

  // 费率
  Rate: number;

  // 所有卡列表
  CardList: Array<Types.CardOptions>;

  // 信用卡
  CurrentCreditCard: Types.CardOptions;
  CreditCards = new Array<Types.CardOptions>();

  // 储蓄卡
  CurrentDepositCard: Types.CardOptions;
  DepositCards = new Array<Types.CardOptions>();

  HeadTitle: string = "刷卡提现";

  // 金额
  Amount: AmountOptions = {
    InputAmount: undefined,
    OutputAmount: undefined
  };

  // 是否可以提交标识
  CanSubmited: boolean = false;

  constructor(public Service: HomeService) {
    // this.GetCardList();
    this.Rate = App.UserInfo.rate;
  }

  ngOnInit() {
  }

  GetCardList() {
    this.Service.GetCardList().then(res => {
      if (!TypeInfo.Assigned(res.length) || res.length === 0) {
        return;
      }
      this.CardList = new Array<Types.CardOptions>();
      this.CreditCards = new Array<Types.CardOptions>();
      this.DepositCards = new Array<Types.CardOptions>();

      for (let item of res) {
        this.CardList.push(item);
        if (item.type === '0') {
          this.CreditCards.push(item);
          if(item.primary === '1') {
            App.CurrentCreditCards = this.CurrentCreditCard = item;
          }
        }

        if (item.type === '1') {
          this.DepositCards.push(item);
          this.CurrentDepositCard = item;
        }
      }
    })
    .catch(err => console.log(err));
  }

  InputAmount() {
    if (!this.Amount.InputAmount) {
      this.Amount.OutputAmount = undefined;
      return;
    }
    this.Amount.OutputAmount = Math.floor((this.Amount.InputAmount * (1 - this.Rate / 100)) * 10) / 10;
  }

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

  ChangeCard() {
    App.ShowModal(App.RootPage.ChangecardsPage,this.CreditCards).then((modal) => {
      modal.onDidDismiss((data) => {
        if (TypeInfo.Assigned(data)) {
          App.CurrentCreditCards = this.CurrentCreditCard = data;
          this.CreditCards.forEach((item) => {
            if (item.id === data.id) {
              item.primary = '1';
            } else {
              item.primary = '0';
            }
          });
        }
      });
    })
  }

  AddCreditCard() {
    if (!App.IsIdAuthed) {
      App.Nav.push(App.RootPage.AuthCardPage);
    } else {
      App.Nav.push(App.RootPage.AddCreditPage, CreditCardPage);
    }
  }
}

export interface AmountOptions
{
  InputAmount: number;
  OutputAmount: number;
}
