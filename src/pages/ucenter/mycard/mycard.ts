import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { IonicPage } from 'ionic-angular';

import { HomeService } from '../../../providers/homeservice';
import { CardModel } from '../../../models/card-model';
import { TAuthService } from '../../../providers/auth';
import { CardHelper, PRIMARY_CARD, CREDIT_CARD, DEPOSIT_CARD } from '../../../shared/helper/card-helper';

@IonicPage()
@Component({
  selector: 'page-mycard',
  templateUrl: 'mycard.html'
})
@Injectable()
export class MyCardPage
{
  App = window.App;

  // 标题
  HeadTitle: string = "我的卡片";

  // 信用卡
  CreditCards: Array<CardModel> = new Array<CardModel>();

  // 储蓄卡
  DepositCards: Array<CardModel> = new Array<CardModel>();

  CardSwitch: number = CREDIT_CARD;

  // 信用卡标识
  CreditCard: number = CREDIT_CARD;

  // 储蓄卡标识
  DepositCard: number = DEPOSIT_CARD;

  // 主卡表示
  PrimaryCard: number = PRIMARY_CARD;

  constructor(public Servie: HomeService, private auth: TAuthService, public navCtrl: NavController, public cardHelper: CardHelper) {
    this.CreditCards = this.cardHelper.filterCard(CREDIT_CARD);
    this.DepositCards = this.cardHelper.filterCard(DEPOSIT_CARD);

    this.Servie.currentCards.subscribe(
      data => {
        this.CreditCards = this.cardHelper.filterCard(CREDIT_CARD);
        this.DepositCards = this.cardHelper.filterCard(DEPOSIT_CARD);
      }
    );
  }

  // 删除信用卡
  DelCreditCard(cardId) {
    this.Servie.DelCard(cardId).subscribe(res => {
      this.cardHelper.delCard(cardId);
      this.CreditCards = this.cardHelper.filterCard(CREDIT_CARD);
      
      App.ShowToast('信用卡删除成功');
      this.auth.GetUserData();
    })
  }

  // 删除储蓄卡
  DelDepositCard(cardId) {
    this.Servie.DelCard(cardId).subscribe(data => {
      this.cardHelper.delCard(cardId);
      this.DepositCards = this.cardHelper.filterCard(DEPOSIT_CARD);

      App.ShowToast('储蓄卡删除成功');
      this.auth.GetUserData();
    })
  }

  // 设置主卡
  SetPrimaryCard(t: number, id: number) {
    this.Servie.SetPrimCard(id).subscribe(
      data => {
        this.cardHelper.setPrimary(t, id);
        this.CreditCards = this.cardHelper.filterCard(CREDIT_CARD);
        this.DepositCards = this.cardHelper.filterCard(DEPOSIT_CARD);    
      }
    );
  }

  // 添加信用卡
  AddCreditCard() {
    App.Nav.push('AddCreditCardPage', {page: 'MyCardPage'});
  }

  // 添加储蓄卡
  AddDepositCard() {
    App.Nav.push('AddDepositPage', {page: 'MyCardPage'});
  }

  ionViewCanEnter() {
    this.auth.CheckToken();
  }
}
