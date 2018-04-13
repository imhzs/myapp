import { Component, Injectable } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';

import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';
import { CardModel } from '../../../models/card-model';
import { HomeService } from '../../../providers/homeservice';
import { TAuthService } from '../../../providers/auth';
import { AmountOptions } from '../creditcard/creditcard';
import { CheckoutHelper } from '../../../shared/helper/checkout-helper';

@IonicPage()
@Component({
	selector: 'page-checkout',
	templateUrl: 'checkout.html'
})
@Injectable()
export class CheckoutPage
{
	// 信用卡
	CreditCard: CardModel;

	// 储蓄卡
	DepositCard: CardModel;

	// 金额
	Amount: AmountOptions;

	// 标题
	HeadTitle: string = '确认收款';

	// 是否可提交标识
	CanSubmited: boolean = true;

	// 支付金额
	PayAmount: string;

	// 到账金额
	ReceiveAmount: string;

	constructor (private navParams: NavParams, private service: HomeService, private auth: TAuthService, private checkoutHelper: CheckoutHelper) {
		this.Amount = <AmountOptions>this.navParams.get('amount');
		this.PayAmount = parseFloat(this.Amount.inputAmount.toString()).toFixed(2);
		this.ReceiveAmount = parseFloat(this.Amount.outputAmount.toString()).toFixed(2);

		if (!TypeInfo.Assigned(this.Amount) && !TypeInfo.IsObject(this.Amount)) {
			App.Nav.push('CreditCardPage');
		}
		this.CreditCard = this.navParams.get('creditCard');
		this.DepositCard = this.navParams.get('depositCard');
	}

	ionViewDidEnter() {
		this.CanSubmited = true;
	}

	// 确认付款
	Pay() {
    this.CanSubmited = false;
    this.service.GetBankPage(this.CreditCard.id, this.DepositCard.id, this.Amount.inputAmount).subscribe(
			resp => {
				this.CanSubmited = true;
				this.checkoutHelper.parse(resp);
			},
			error => {
				this.CanSubmited = true;
			}
		);
	}

	ionViewCanEnter() {
    this.auth.CheckToken();
  }
}