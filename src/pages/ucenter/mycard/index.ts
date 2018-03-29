import { Component, OnInit, Injectable } from '@angular/core';
import {NavController} from 'ionic-angular/navigation/nav-controller';

import { HomeService } from '../../../providers/homeservice';
import * as Types from '../../../providers/types';
import { TAuthService } from '../../../providers/auth';
import { CardHelper, PRIMARY_CARD, CREDIT_CARD, DEPOSIT_CARD } from '../../../shared/helper/CardHelper';

@Component({
  selector: 'page-mycard',
  templateUrl: 'index.html'
})
@Injectable()
export class MycardPage implements OnInit
{
  App = window.App;

  // 标题
  HeadTitle: string = "我的卡片";

  // 信用卡
  CreditCards: Array<Types.CardOptions> = new Array<Types.CardOptions>();

  // 储蓄卡
  DepositCards: Array<Types.CardOptions> = new Array<Types.CardOptions>();

  // 当前tab索引
  ActiveIndex = 0;

  CardSwitch: number = CREDIT_CARD;

  CreditCard: number = CREDIT_CARD;

  DepositCard: number = DEPOSIT_CARD;

  selectedCreditCard: number;

  selectedDepositCard: number;

  constructor(public Servie: HomeService, private Auth: TAuthService, public navCtrl: NavController) {
  }

  ionViewDidEnter() {
    this.CreditCards = CardHelper.filterCard(CREDIT_CARD);
    this.DepositCards = CardHelper.filterCard(DEPOSIT_CARD);
  }

  ngOnInit() {
    // this.selectedCreditCard = CardHelper.getPrimaryCard(CREDIT_CARD).id;
    // this.selectedDepositCard = CardHelper.getPrimaryCard(DEPOSIT_CARD).id;
    this.selectedCreditCard = 1;
    this.selectedDepositCard = 2;
  }

  // 删除信用卡
  DelCreditCards(cardId) {
    this.Servie.DelCard(cardId).then(res => {
      this.CreditCards.splice(this.CreditCards.indexOf(cardId), 1)
        if (res) {
          App.ShowToast('信用卡删除成功');
          App.CurrentCreditCards = {};
          this.Auth.GetUserData();
        } else {
          App.ShowError('信用卡删除失败');
        }
    })
  }

  // 删除储蓄卡
  DelDepositCards(cardId) {
    this.Servie.DelCard(cardId).then(res => {
      this.DepositCards.splice(this.DepositCards.indexOf(cardId), 1)
        if (res) {
          App.ShowToast('储蓄卡删除成功');
          App.CurrentDepositCard = {};
          this.Auth.GetUserData();
        } else {
          App.ShowError('信用卡删除失败');
        }

    })
  }

  // 添加信用卡
  AddCreditCard() {
    App.Nav.push(App.RootPage.AddcreditsCamPage, App.RootPage.MycardPage);
  }

  // 添加储蓄卡
  AddDepositCard() {
    App.Nav.push(App.RootPage.AddDepositCamPage, App.RootPage.MycardPage);
  }

  // 当前tab
  TabsIndex() {
    this.navCtrl.parent.select(3);
  }

  // 切换tab
  SwitchTabs(n:number) {
    this.ActiveIndex = n;
  }
}
