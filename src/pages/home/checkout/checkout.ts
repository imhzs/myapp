import { Component, Injectable } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { CardModel } from '../../../models/card-model';
import { HomeService } from '../../../providers/homeservice';
import { AmountOptions } from '../creditcard/creditcard';

@IonicPage()
@Component({
	selector: 'page-checkout',
	templateUrl: 'checkout.html'
})
@Injectable()
export class CheckoutPage
{
	// 支付金额
	PayAmount: number;

	// 到账金额
	ReceiveAmount: number;

	// 信用卡
	CreditCard: CardModel;

	// 储蓄卡
	DepositCard: CardModel;

	// 标题
	HeadTitle: string = '确认收款';

	// 是否可提交标识
	CanSubmited: boolean = true;

	constructor (private navParams: NavParams, private service: HomeService) {
		let amount = <AmountOptions>this.navParams.get('amount');
		this.PayAmount = amount.inputAmount;
		this.ReceiveAmount = amount.outputAmount;
		this.CreditCard = this.navParams.get('creditCard');
		this.DepositCard = this.navParams.get('depositCard');
	}

	ionViewDidEnter() {
		this.CanSubmited = true;
	}

	// 确认付款
	Pay() {
		console.log('Pay');
    this.CanSubmited = false;
    this.service.GetBankPage(this.CreditCard.id, this.DepositCard.id, this.PayAmount).subscribe(
			data => {
				// 跳转银联页面
				if (/^[http:\/\/|https:\/\/](.*)?/.test(data)) {
					(new InAppBrowser()).create(encodeURI(data));
				} else if(data.indexOf('<html>') == -1) {
					App.ShowError(data.respMsg);
				} else {
					App.Nav.push(App.RootPage.FinalpayPage, {innerHtml: data});
				}
			}
		);
	}
}