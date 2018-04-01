import { Component, OnInit, Injectable } from '@angular/core';
import { NavParams, IonicPage, ViewController } from 'ionic-angular';

import { CardModel } from '../../../models/card-model';
import { HomeService } from '../../../providers/homeservice';

@IonicPage()
@Component({
  selector: 'page-changecards',
  templateUrl: 'changecards.html'
})
@Injectable()
export class ChangecardsPage implements OnInit
{
  autoManufacturers: string;

  constructor(public Service: HomeService, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ngOnInit() {
    console.log(this.navParams.get('id'));
    this.BankList = [];
    for (let item of this.navParams.data) {
      if (item.primary === '1') item.chose = true;
      this.BankList.push(item);
    }
  }

  AddCards() {
    App.Nav.push(App.RootPage.AddCreditPage);
  }

  SelectedCard(item) {
    if (item.chose) {
      return;
    }
    for (let i of this.BankList) i.chose = false;
    item.chose = !item.chose;

    this.Service.SetPrimCard(item.id)
    .then(() => setTimeout(() => App.ActiveView.dismiss(item)))
    .catch((err) => App.ShowError('接口异常...'));
  }

  public confirmCard() {
    console.log(this.autoManufacturers);
    let data = {id: this.autoManufacturers};
    this.viewCtrl.dismiss(data);
  }

  HeadTitle: string = "我的信用卡";

  private BankList: Array<CardModel> = new Array<CardModel>();
}
