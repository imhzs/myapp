import { Component, Injectable } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { CardOptions } from '../../../providers/types/card';
import { HomeService } from '../../../providers/homeservice';

@Component({
	selector: 'page-checkout',
	templateUrl: 'index.html'
})
@Injectable()
export class CheckoutPage
{
	// 支付金额
	PayAmount: number;

	// 到账金额
	ReceiveAmount: number;

	// 信用卡
	CreditCard: CardOptions;

	// 储蓄卡
	DepositCard: CardOptions;

	// 标题
	HeadTitle: string = '确认收款';

	// 是否可提交标识
	CanSubmited: boolean = true;

	constructor (private navParams: NavParams, private service: HomeService) {
		this.PayAmount = this.navParams.get('payAmount');
		this.ReceiveAmount = this.navParams.get('receiveAmount');
		this.CreditCard = this.navParams.get('creditCard');
		this.DepositCard = this.navParams.get('depositCard');
	}

	ionViewDidEnter() {
		this.CanSubmited = true;
	}

	// 确认付款
	Pay() {
		let date = new Date();
    let hour = date.getHours();
    if (hour < 9 || hour > 21) {
      App.ShowError('交易时间为9:00-21:00');
      return;
    }

    this.CanSubmited = false;
    this.service.GetBankPage(this.CreditCard.id, this.DepositCard.id,this.PayAmount).then(res => {
      // 跳转银联页面
      if(res) {
        if (/^[http:\/\/|https:\/\/](.*)?/.test(res)) {
          (new InAppBrowser()).create(encodeURI(res));
        } else if(res.indexOf('<html>') == -1) {
          let data = JSON.parse(res);
          App.ShowError(data.respMsg);
        } else {
          App.Nav.push(App.RootPage.FinalpayPage, {innerHtml: res});
        }
      } else {
        App.ShowError('系统异常，请尝试有积分提现, 或稍后再试');
      }
    });
	}
}