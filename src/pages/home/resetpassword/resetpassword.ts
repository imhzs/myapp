import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavParams, IonicPage } from 'ionic-angular';

import { TAuthService } from '../../../providers/auth';

@IonicPage({
  segment: 'resetpassword/:mobile/:vcode'
})
@Component({
  selector: 'page-resetpwd',
  templateUrl: 'resetpassword.html'
})
@Injectable()
export class ResetPasswordPage implements OnInit
{
  App = window.App;

  HeadTitle: string = "重置密码"
  
  formGroup: FormGroup;

  tel: number;

  VCode: string;

  private conpwd: string;

  private pwd: FormControl;

  constructor(public auth: TAuthService, public navParams: NavParams) {
    this.tel = this.navParams.get('mobile');
    this.VCode = this.navParams.get('vcode');
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      pwd: this.pwd = new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    })
  }

  OnConfirm() {
    if(this.conpwd !== this.formGroup.value.pwd ) {
      App.ShowError('两次输入密码不一致');
      return;
    }
    this.auth.GetchangePsdData(this.tel,this.formGroup.value.pwd, this.VCode).subscribe(
      resp => {
        if (resp.code === TAuthService.REQ_OK) {
          this.auth.Logout();
        }
      }
    );
  }

  ionViewCanEnter() {
    return App.authenticated;
  }
}