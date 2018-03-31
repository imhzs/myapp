import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavParams, IonicPage } from 'ionic-angular';

import { TAuthService } from '../../../providers/auth';

@IonicPage()
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

  constructor(public Service: TAuthService, public navParams: NavParams) {
    this.tel = this.navParams.get('mobile');
    this.VCode = this.navParams.get('code');
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      pwd: this.pwd = new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    })
  }

  clickgetlogin() {
    if(this.conpwd === this.formGroup.value.pwd ) {
      this.Service.GetchangePsdData(this.tel,this.formGroup.value.pwd, this.VCode);
    } else {
      App.ShowError('两次输入密码不一致')
    }
  }
}