import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';

import { TAuthService } from '../../../providers/auth';
import { MineService } from '../../../providers/mineservice';

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage
{
  HeadTitle: string = "订单详情";
  
  OrderDetail: any = {};

  constructor(public navParams: NavParams, public Service: MineService, private auth: TAuthService) {
    let orderId = navParams.data;
    this.GetCashDetail(orderId);
  }

  GetCashDetail(id) {
    this.Service.GetCashDetail(id).subscribe(data => this.OrderDetail = data.data);
  }

  ionViewCanEnter() {
    this.auth.CheckToken();
  }
}
