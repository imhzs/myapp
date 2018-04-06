import { Component, Injectable } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { TAuthService } from '../../../providers/auth';
import { MineService } from '../../../providers/mineservice';

@IonicPage()
@Component({
  selector: 'page-records',
  templateUrl: 'records.html'
})
@Injectable()
export class RecordsPage
{
  App = window.App;

  HeadTitle: string='收款记录'

  ListData: Array<any>;

  DataEmpty: boolean;

  constructor(public Service: MineService, private auth: TAuthService) {
    this.GetCashList();
  }

  GetCashList() {
    this.Service.GetCashList().subscribe(data => this.DataProcess(data.data));
  }

  DataProcess(data) {
    if (data.length == 0) return this.DataEmpty = true;
    this.DataEmpty = false;
    this.ListData = new Array<any>();
    let tmpMonth = data[0].time.split(' ')[0].substr(0,7);
    this.ListData = [
      {
        month: tmpMonth,
        total: 0,
        data: []
      }
    ];
    for (let i = 0; i < data.length; i ++) {
      let tmpJson = data[i];
      if (tmpMonth == data[i].time.split(' ')[0].substr(0,7)) {
        for (let j = 0; j < this.ListData.length; j ++) {
          if (this.ListData[j].month == tmpMonth)  {
            this.ListData[j].data.push(tmpJson);
            // 成功订单统计
            if(tmpJson.status == '1') {
              this.ListData[j].total += Number(tmpJson.amount);
            }
          }
        }
      } else {
        tmpMonth = data[i].time.split(' ')[0].substr(0,7);
        this.ListData.push ({
          month: tmpMonth,
          total: tmpJson.amount,
          data: [tmpJson]
        });
      }
    }
  }
  
  ionViewCanEnter() {
    this.auth.CheckToken();
  }
}
