import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage } from 'ionic-angular';

import { TAuthService } from '../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-modifypwd',
  templateUrl: 'modifypassword.html'
})
@Injectable()
export class ModifyPasswordPage implements OnInit
{
  App = window.App;

  FormGroup: FormGroup;
    
  VCode: FormControl;

  Password: FormControl;

  HeadTitle: string = "修改密码";

  VCodeText: string = '获取验证码';

  pwdVisible: boolean = false;

  private tel: string = "****";

  constructor(public Service: TAuthService) {
  }

  ngOnInit() {
    if (App.UserInfo.mobile) {
      this.tel = App.UserInfo.mobile.toString().substr(0, 3) + this.tel + App.UserInfo.mobile.toString().substr(-4);
    }

    this.FormGroup = new FormGroup({
      VCode: this.VCode = new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      Password: this.Password = new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })
  }

  //倒计时
  times() {
    let count: number = 60;
    let timer = setInterval(() => {
      if (count > 0) {
        count --;
        this.VCodeText = count + 's' + '后重新获取';
        if (count === 0) {
          this.VCodeText = '重新获取';
          clearInterval(timer);
        }
      }
    }, 1000);
  }

  GetTelCode() {
    this.Service.getPwdVericode(App.UserInfo.mobile).subscribe(res => {
    })
  }

  get ConfirmBtnIsDisabled(): boolean {
    if(this.VCode.invalid || this.Password.invalid) {
      return true;
    }
    return false;
  }

  ConfirmModify() {
    this.Service.GetchangePsdData(App.UserInfo.mobile, this.FormGroup.value.Password, this.FormGroup.value.VCode);
  }
}
