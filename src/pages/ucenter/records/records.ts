import { Component, Injectable, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { MineService } from '../../../providers/mineservice';
import { OrderHelper } from '../../../shared/helper/order-helper';

@IonicPage()
@Component({
  selector: 'page-records',
  templateUrl: 'records.html'
})
@Injectable()
export class RecordsPage
{
  App = window.App;

  // 页面标题
  HeadTitle: string='收款记录'

  // 收款记录数据
  ListData: Array<any> = new Array<any>();

  // 没有收款记录
  DataEmpty: boolean;

  @ViewChild('wrapperRef') wrapperRef: ElementRef;

  constructor(public Service: MineService) {
    this.GetCashList();
  }

  GetCashList() {
    this.Service.GetCashList().subscribe(data => this.DataProcess(data.data));
  }

  DataProcess(data) {
    if (data.length == 0) {
      return this.DataEmpty = true;
    }
    this.DataEmpty = false;
    let tmpMonth = data[0].time.split(' ')[0].substr(0, 7);
    this.ListData = [{month: tmpMonth, total: 0, data: []}];
    for (let i = 0; i < data.length; i ++) {
      let tmpJson = data[i];
      tmpJson['statusText'] = OrderHelper.getStatusText(tmpJson.status);
      tmpJson['typeText'] = OrderHelper.getTypeText(tmpJson.type);
      if (tmpMonth == data[i].time.split(' ')[0].substr(0, 7)) {
        for (let j = 0; j < this.ListData.length; j ++) {
          if (this.ListData[j].month == tmpMonth)  {
            this.ListData[j].data.push(tmpJson);
            // 成功订单统计
            if(tmpJson.status == OrderHelper.StatusSuccess) {
              this.ListData[j].total += Number(tmpJson.amount);
            }
          }
        }
      } else {
        tmpMonth = data[i].time.split(' ')[0].substr(0, 7);
        this.ListData.push ({month: tmpMonth, total: tmpJson.amount, data: [tmpJson]});
      }
    }
  }

  // 详情页
  ShowDetail(id) {
    App.Nav.push(App.pages.recordDetailPage, {id: id});
  }
  
  ionViewCanEnter() {
    return App.authenticated;
  }
}
