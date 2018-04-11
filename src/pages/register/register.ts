import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage } from 'ionic-angular';

import { TAuthService } from '../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
@Injectable()
export class RegisterPage implements OnInit
{
  App = window.App;

  public State: number = 0;

  public VCodeText: string = "获取验证码";

  formGroup: FormGroup;

  Tel: FormControl;

  VCode: FormControl;

  HeadTitle: string = '用户注册';

  constructor(public Service: TAuthService) {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      Tel: this.Tel = new FormControl('', [
        Validators.required,
        Validators.pattern(/^1[3|4|5|7|8][0-9]{9}$/)
      ]),

      VCode: this.VCode = new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    });
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

  // 验证手机号码以及验证码
  GetVeriyCode() {
    this.Service.GetVerifyCode(this.formGroup.value.Tel).subscribe(
      data => {
        this.times();
      }
    );
  }

  NextTable() {
    this.Service.CheckVerifyCode(this.formGroup.value.Tel, this.formGroup.value.VCode).subscribe(
      data => {
        App.Nav.push(App.pages.setPasswordPage, {mobile: this.formGroup.value.Tel, code: this.formGroup.value.VCode});
      }
    );
  }
}
