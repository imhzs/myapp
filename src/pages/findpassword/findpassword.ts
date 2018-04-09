import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage } from 'ionic-angular';

import { TAuthService } from '../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-findpwd',
  templateUrl: 'findpassword.html'
})
@Injectable()
export class FindPasswordPage implements OnInit
{
  App = window.App;

  formGroup: FormGroup;

  tel: FormControl;

  VCode: FormControl ;

  HeadTitle: string = '找回密码'
  
  VCodeText: string = '获取验证码';

  constructor(public Service: TAuthService) {
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      tel: this.tel = new FormControl('', [
        Validators.required,
        Validators.pattern(/^1[3|4|5|7|8][0-9]{9}$/)
      ]),
      VCode: this.VCode = new FormControl('',[
        Validators.required,
        Validators.minLength(4)
      ]),
    })
  }

  // 倒计时
  times() {
    let count: number = 60;
    let timer = setInterval(() => {
      if (count > 0) {
        count--;
        this.VCodeText = count + 's' + '后重新获取';
        if (count === 0) {
          this.VCodeText = '重新获取';
          clearInterval(timer);
        }
      }
    }, 1000);
  }

  GetCode() {
    this.Service.GetResetPwdData(this.formGroup.value.tel).subscribe(
      data => {
        this.times();
      },
      error => {
        console.log(error);
      }
    );
  }
    
  GetTelCode() {
    this.Service.GetFindPwdData(this.formGroup.value.tel, this.formGroup.value.VCode).subscribe(
      data => {
        App.NavGo(`resetpassword/${this.formGroup.value.tel}/${this.formGroup.value.VCode}`);
      }
    );
  }

  get FindDisabled(): boolean {
    if (this.tel.invalid || this.VCode.invalid) {
      return true;
    }
    return false;
  }
}