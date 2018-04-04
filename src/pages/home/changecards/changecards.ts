import { Component, Injectable } from '@angular/core';
import { NavParams, IonicPage, ViewController } from 'ionic-angular';

import { CardModel } from '../../../models/card-model';
import { HomeService } from '../../../providers/homeservice';
import { CREDIT_CARD, DEPOSIT_CARD } from '../../../shared/helper/card-helper';

@IonicPage()
@Component({
  selector: 'page-changecards',
  templateUrl: 'changecards.html'
})
@Injectable()
export class ChangecardsPage
{
  // 当前选中的卡片
  CheckedCardId: number;

  // 页面标题
  HeadTitle: string = "我的信用卡";

  // 卡片数据
  Cards: Array<CardModel> = new Array<CardModel>();

  // 卡类型
  CardType: number;

  constructor(public Service: HomeService, public navParams: NavParams, public viewCtrl: ViewController) {
    console.log(this.navParams.get('curCardId'));
    this.CheckedCardId = this.navParams.get('curCardId');
    this.Cards = this.navParams.get('data');
    this.CardType = this.navParams.get('t');
  }

  // 新增卡片
  AddCards() {
    if (this.CardType === CREDIT_CARD) {
      App.Nav.push('AddCreditCardPage', {page: 'CreditCardPage'});
    } else if (this.CardType === DEPOSIT_CARD) {
      App.Nav.push('AddDepositPage', {page: 'CreditCardPage'});
    }
  }

  OnConfirmCard() {
    console.log(this.CheckedCardId);
    let data = {id: this.CheckedCardId};
    this.viewCtrl.dismiss(data);
  }
}
