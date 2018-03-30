import { Component, Injectable } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { CardOptions } from '../../../providers/types/card';

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

	constructor (private navParams: NavParams) {
		this.PayAmount = this.navParams.get('payAmount');
		this.ReceiveAmount = this.navParams.get('receiveAmount');
		this.CreditCard = this.navParams.get('creditCard');
		this.DepositCard = this.navParams.get('depositCard');
	}
}