import { Component, Injectable } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';
import { CardModel } from '../../../models/card-model';
import { HomeService } from '../../../providers/homeservice';
import { TAuthService } from '../../../providers/auth';
import { AmountOptions } from '../creditcard/creditcard';

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

	constructor (private navParams: NavParams, private service: HomeService, private auth: TAuthService) {
		this.Amount = <AmountOptions>this.navParams.get('amount');
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
			data => {
				// 跳转银联页面
				if (/^[http:\/\/|https:\/\/](.*)?/.test(data)) {
					(new InAppBrowser()).create(encodeURI(data));
				} else if(data.indexOf('<html>') == -1) {
					App.ShowError(data.respMsg);
				} else {
					App.Nav.push(App.RootPage.FinalpayPage, {innerHtml: data});
				}
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