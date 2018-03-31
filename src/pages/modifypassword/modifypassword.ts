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

  HeadTitle: string = "修改密码";

  private pwd: FormControl;

  private VCodeText: string = '获取验证码';

  private pwdVisible: boolean = false;

  private pwdText: string = 'password';

  private tel: string = "****";

  constructor(public Service: TAuthService) {
  }

  ngOnInit() {
    this.tel = App.UserInfo['mobile'].substr(0,3) + this.tel + App.UserInfo['mobile'].substr(-4);
    this.FormGroup = new FormGroup({
      VCode: this.VCode = new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      pwd: this.pwd = new FormControl('', [
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
    this.Service.getPwdVericode(App.UserInfo['mobile']).then(res => {
      if(res.code === 1) {
      this.times();
        return App.ShowToast('发送成功');
      } else {
        return App.ShowToast(res.msg)
      }
    })
    .catch(err => App.ShowToast(err.msg));
  }

  // 密码是否可看
  pwdType() {
    this.pwdVisible = !this.pwdVisible;
    if(this.pwdVisible) {
      this.pwdText = 'text';
    } else {
      this.pwdText = 'password';
    }
  }

  get ConfirmBtnIsDisabled(): boolean {
    if(this.VCode.invalid || this.pwd.invalid) {
      return true;
    }
    return false;
  }

  ConfirmModify() {
    this.Service.GetchangePsdData(App.UserInfo['mobile'], this.FormGroup.value.pwd, this.FormGroup.value.VCode);
  }
}
