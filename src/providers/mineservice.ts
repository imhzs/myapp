import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TBaseService } from '../providers/pub_service';
import { TypeInfo } from '../UltraCreation/Core/TypeInfo';

@Injectable()
export class MineService extends TBaseService
{
  constructor(public http: Http) {
    super(http);
  }

  //获取取现记录列表
  async GetCashList() {
    const result = await this.Post('kpay/api/cash/getCashList').then(res => res.json());
    console.log(result);

    if (result.code === 1) {
      return result.data;
    } else {
      App.ShowError(result.msg);
      App.Nav.pop();
    }
  }

  // 获取取现记录详情
  async GetCashDetail(orderId) {
    this.SetParam('id', orderId);
    const result = await this.Post('kpay/api/cash/getCashDetail').then(res => res.json());
    if (result.code === 1) {
      return result.data;
    } else {
      App.ShowError(result.msg);
      App.Nav.pop();
    }
  }

  // 获取红包礼券voucher
  async GetVoucherList() {
    const result = await this.Post('kpay/api/cash/cashback/list').then(res => res.json());
    if (result.code === 1) {
      return result.data;
    } else {
      App.ShowError(result.msg);
      App.Nav.pop();
    }
  }

  // 获取我的客户
  async GetMyCustomer() {
    const result = await this.Post('kpay/api/user/mycustomer').then(res => res.json());
    if (result.code === 1) {
      return result.data;
    } else {
      App.ShowError(result.msg);
      App.Nav.pop();
    }
  }

  // 获取返现记录
  async GetCashBack() {
    const result = await this.Post('kpay/api/trade/list').then(res => res.json());
    if (result.code === 1) {
      return result.data;
    } else {
      App.ShowError(result.msg);
      App.Nav.pop();
    }
  }

  // 获取VIP套餐列表
  async GetVipList() {
    const result = await this.Post('kpay/api/package/list').then(res => res.json());
    if (result.code === 1) {
      return result.data;
    } else {
      App.ShowError(result.msg);
      App.Nav.pop();
    }
  }

  // 购买Vip
  async BuyVip(id) {
    this.SetParam('packId', id);
    const result = await this.Post('kpay/api/package/buy', {packId: id}).then(res => res.json());
    if (result.code === 1) {
      return result.data;
    } else {
      App.ShowError(result.msg);
      return false
    }
  }
}

