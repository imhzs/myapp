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

  CardSwitch: number = CREDIT_CARD;

  // 信用卡标识
  CreditCard: number = CREDIT_CARD;

  // 储蓄卡标识
  DepositCard: number = DEPOSIT_CARD;

  constructor(public Servie: HomeService, private Auth: TAuthService, public navCtrl: NavController) {
  }

  ionViewDidEnter() {
    this.CreditCards = CardHelper.filterCard(CREDIT_CARD);
    this.DepositCards = CardHelper.filterCard(DEPOSIT_CARD);
  }

  ngOnInit() {
  }

  // 删除信用卡
  DelCreditCards(cardId) {
    this.Servie.DelCard(cardId).then(res => {
      if (res) {
        CardHelper.delCard(cardId);
        this.CreditCards = CardHelper.filterCard(CREDIT_CARD);
        
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
      if (res) {
        CardHelper.delCard(cardId);
        this.DepositCards = CardHelper.filterCard(DEPOSIT_CARD);

        App.ShowToast('储蓄卡删除成功');
        App.CurrentDepositCard = {};
        this.Auth.GetUserData();
      } else {
        App.ShowError('信用卡删除失败');
      }
    })
  }

  // 设置主卡
  async SetPrimaryCard(t: number, id: number) {
    let res = await this.Servie.SetPrimCard(id);
    if (false !== res) {
      CardHelper.setPrimary(t, id);
      this.CreditCards = CardHelper.filterCard(CREDIT_CARD);
      this.DepositCards = CardHelper.filterCard(DEPOSIT_CARD);
    }
  }

  // 添加信用卡
  AddCreditCard() {
    App.Nav.push(App.RootPage.AddCreditPage, App.RootPage.MycardPage);
  }

  // 添加储蓄卡
  AddDepositCard() {
    App.Nav.push(App.RootPage.AddDepositPage, App.RootPage.MycardPage);
  }
}
