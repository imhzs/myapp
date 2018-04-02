import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TBaseService } from '../providers/pub_service';

@Injectable()
export class MineService extends TBaseService
{
  constructor(public http: HttpClient) {
    super(http);
  }

  //获取取现记录列表
  GetCashList() {
    return this.Post('kpay/api/cash/getCashList');
  }

  // 获取取现记录详情
  GetCashDetail(orderId) {
    this.SetParam('id', orderId);
    return this.Post('kpay/api/cash/getCashDetail');
  }

  // 获取红包礼券voucher
  GetVoucherList() {
    return this.Post('kpay/api/cash/cashback/list');
  }

  // 获取我的客户
  GetMyCustomer() {
    return this.Post('kpay/api/user/mycustomer');
  }

  // 获取返现记录
  GetCashBack() {
    return this.Post('kpay/api/trade/list');
  }

  // 获取VIP套餐列表
  GetVipList() {
    return this.Post('kpay/api/package/list');
  }

  // 购买Vip
  BuyVip(id) {
    this.SetParam('packId', id);
    return this.Post('kpay/api/package/buy', {packId: id});
  }
}

