import { Component, OnInit, Injectable } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HomeService } from '../../../providers/homeservice';

@IonicPage()
@Component({
  selector: 'page-cardInfor',
  templateUrl: 'cardinfor.html'
})
@Injectable()
export class CardInforPage implements OnInit
{
  App = window.App;

  HeadTitle: string = "确认信息";

  Params: ParamsOptions;

  OrderNo: number;

  VCodeText: string = '获取验证码';

  State: number = 0;

  ShowFront: boolean = false;

  ShowBack: boolean = false;

  Voucher: Array<any> = [];

  VoucherId: string;

  Form_Group_Info: FormGroup;

  CVN: FormControl;

  CardDate: FormControl;

  VerifyCode: FormControl;

  constructor(public navParams: NavParams, public Service: HomeService) {
    this.Params = {
      InputAmount: this.navParams.get('OutAmount'),
      OutputAmount: this.navParams.get('InAmount'),
      CreditCard: this.navParams.get('CreditCard'),
      DepositCard: this.navParams.get('DepositCard'),
      Code: this.navParams.get('Code'),
      CreditCode: this.navParams.get('CreditCode'),
      DepositCode: this.navParams.get('DepositCode'),
      Mobile: this.navParams.get('Mobile')
    }
  }

  ngOnInit() {
    this.Form_Group_Info = new FormGroup({
      CVN: this.CVN = new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),

      CardDate: this.CardDate = new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),

      VerifyCode: this.VerifyCode = new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    });

    this.GetAvaCash();
  }

  // 倒计时
  times() {
    let count: number = 60;
    let timer = setInterval(() => {
      if (count > 0) {
        count --;
        this.VCodeText = '已发送' + count + 's';
        if (count === 0) {
          this.VCodeText = '重新获取';
          this.State = 0;
          clearInterval(timer);
        }
      }
    }, 1000);
  }

  // 获取可用优惠券
  GetAvaCash() {
    this.Service.GetAvaCash(this.Params.OutputAmount).subscribe(res => {
      // this.Voucher = res;
    })
  }

  get VCodeBtnIsDisabled(): boolean {
    if (this.CVN.invalid || this.CardDate.invalid) {
      return true;
    }
    return false;
  }

  get CompleteBtnIsDisabled(): boolean {
    if (this.CVN.invalid || this.CardDate.invalid || this.VerifyCode.invalid) return true;
    return false;
  }

  GetVerifyCode() {
    if (this.VoucherId) {
      this.Service.GetVerifyode(
        this.Params.Code,
        this.Form_Group_Info.value.CVN,
        this.Form_Group_Info.value.CardDate,
        this.Params.Mobile,
        this.Params.OutputAmount,
        this.VoucherId)
      .subscribe(res => {
        this.times();
      });
    } else {
      this.Service.GetVerifyode(
        this.Params.Code,
        this.Form_Group_Info.value.CVN,
        this.Form_Group_Info.value.CardDate,
        this.Params.Mobile,
        this.Params.OutputAmount)
      .subscribe(res => {
        this.times();
      });
    }
  }

  ConfirmCode()
  {
    if (!this.OrderNo) {
      App.ShowError('验证码输入不正确');
      return;
    }
    this.Service.ConfirmResult(this.OrderNo, this.Form_Group_Info.value.VerifyCode).subscribe(
      data => {
        App.Nav.push(App.pages.confirmInfoPage, {InCard: this.Params.DepositCard, FinalAmount: this.Params.InputAmount, CardCode: this.Params.DepositCode});
      }
    )
  }

  ShowBackEmp() {
    this.ShowBack = true;
  }

  ShowFrontEmp() {
    this.ShowFront = true;
  }

  CloseCard() {
    this.ShowBack = this.ShowFront = false;
  }

  ClickUserVoucher() {
  }

  ClickUserChosen() {
  }
}
export interface ParamsOptions
{
  InputAmount: number,
  OutputAmount: number,
  CreditCard: string,
  DepositCard: string,
  Code: string,
  CreditCode: string,
  DepositCode: string,
  Mobile: string
}
