import { Component, OnInit } from '@angular/core';
// import { InAppBrowser } from '@ionic-native/in-app-browser';
import { IonicPage } from 'ionic-angular';

import { TAuthService } from '../../../providers/auth';
import { MineService } from '../../../providers/mineservice';

@IonicPage()
@Component({
  selector: 'page-VIPmembers',
  templateUrl: 'VIPmembers.html'
})
export class VIPmembersPage implements OnInit
{
  App = window.App;

  HeadTitle: string = "我的费率";

  VipIndex: number = 0;

  VipList: Array<any>;

  PayAmount: number;

  Deadline: string;
  
  VipId: number;

  constructor(private Service: MineService, private auth: TAuthService) {
    this.GetVipDeadLine(10);
  }

  ngOnInit() {
    this.Service.GetVipList().subscribe(resp => {
      this.VipList = resp.data;
      for (let i = 0; i < this.VipList.length; i ++) {
        if (this.VipList[i].name.indexOf(App.UserInfo['rank']) !== -1) {
          this.VipId = this.VipList[i].id;
        }
      }
      this.PayAmount = this.VipList[this.VipIndex].price;
    });

    if (App.UserInfo['vip']) {
      this.GetVipDeadLine(App.UserInfo['packageDays']);
    }
  }

  ChooseVIP(ind) {
    if (this.VipList[ind].name == App.UserInfo['rank']) return;
    this.VipIndex = ind;
    this.PayAmount = this.VipList[ind].price;
  }

  Submit() {
    this.Service.BuyVip(this.VipList[this.VipIndex].id).subscribe(resp => {
    })
  }

  GetVipDeadLine(days: number) {
    const TDate = new Date().getTime();
    let stamp = days * 864e5;
    let DeadStamp = TDate + stamp;
    let DeadTime = new Date(DeadStamp);
    let Year = DeadTime.getFullYear();
    let Month = DeadTime.getMonth() + 1;
    let Day = DeadTime.getDate();
    this.Deadline = Year + '-' + Month + '-' + Day;
  }

  ionViewCanEnter() {
    this.auth.CheckToken();
  }
}
