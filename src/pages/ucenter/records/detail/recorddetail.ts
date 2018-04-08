import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';

import { TAuthService } from '../../../../providers/auth';
import { MineService } from '../../../../providers/mineservice';
import { OrderHelper } from '../../../../shared/helper/order-helper';

@IonicPage({
  segment: 'record/detail/:id'
})
@Component({
  selector: 'page-orderdetail',
  templateUrl: 'recorddetail.html'
})
export class OrderDetailPage
{
  HeadTitle: string = "订单详情";
  
  // 订单详情
  OrderDetail: any;

  constructor(public navParams: NavParams, public Service: MineService, private auth: TAuthService) {
    let orderId = navParams.get('id');
    this.GetCashDetail(orderId);
  }

  GetCashDetail(id) {
    this.Service.GetCashDetail(id).subscribe(data => {
      let order = data.data;
      order.statusText = OrderHelper.getStatusText(order.status);
      order.typeText = OrderHelper.getTypeText(order.type);
      this.OrderDetail = order;
    });
  }

  ionViewCanEnter() {
    this.auth.CheckToken();
  }
}
