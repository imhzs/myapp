import { Component } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';
import { MineService } from '../../../providers/mineservice';

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage
{
  constructor(public navParams: NavParams, public Service: MineService) {
    let orderId = navParams.data;
    this.GetCashDetail(orderId);
  }

  GetCashDetail(id)
  {
    this.Service.GetCashDetail(id).then(res => this.OrderDetail = res)
  }

  HeadTitle: string = "订单详情";
  OrderDetail: any = {};
}
