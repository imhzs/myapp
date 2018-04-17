import { Component, Injectable } from '@angular/core';
import { NavParams, IonicPage, ViewController } from 'ionic-angular';

import { CardModel } from '../../../models/card-model';
import { HomeService } from '../../../providers/homeservice';
import { TAuthService } from '../../../providers/auth';
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

  // 信用卡
  TypeCreditCard: number = CREDIT_CARD;

  // 储蓄卡
  TypeDepositCard: number = DEPOSIT_CARD;

  constructor(public Service: HomeService, public navParams: NavParams, public viewCtrl: ViewController, private auth: TAuthService) {
    this.CheckedCardId = this.navParams.get('curCardId');
    this.Cards = this.navParams.get('data');
    this.CardType = this.navParams.get('t');
    this.HeadTitle = this.navParams.get('title');
  }

  // 新增卡片
  AddCards() {
    if (this.CardType === CREDIT_CARD) {
      App.Nav.push(App.pages.addCreditCardPage, {page: App.pages.creditCardPage});
    } else if (this.CardType === DEPOSIT_CARD) {
      App.Nav.push(App.pages.addDepositPage, {page: App.pages.creditCardPage});
    }
  }

  // 确认选择
  OnConfirmCard() {
    console.log(this.CheckedCardId);
    let data = {id: this.CheckedCardId};
    this.viewCtrl.dismiss(data);
  }

  ionViewCanEnter() {
    this.auth.CheckToken();
  }

  // 添加信用卡
  AddCreditCard() {
    App.Nav.push(App.pages.addCreditCardPage, {page: App.pages.creditCardPage});
  }

  // 添加储蓄卡
  AddDepositCard() {
    App.Nav.push(App.pages.addDepositPage, {page: App.pages.creditCardPage});
  }
}
