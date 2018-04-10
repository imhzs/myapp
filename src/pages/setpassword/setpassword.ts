import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavParams, IonicPage } from 'ionic-angular';

import { TAuthService } from '../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-setpwd',
  templateUrl: 'setpassword.html'
})
@Injectable()
export class SetPasswordPage implements OnInit
{
  App = window.App;
  
  public PassClear: boolean = false;

  public PassWord: string = '';

  public ConPassWord: string = '';

  public PassWordType: string = 'password';

  public HeadTitle: string ="设定密码"

  public Tel: number;

  public VCode: string;

  formGroup: FormGroup;

  Pass: FormControl;

  constructor(public Service: TAuthService, public navParams: NavParams) {
    this.Tel = this.navParams.get('mobile');
    this.VCode = this.navParams.get('code');
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      Pass: this.Pass = new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    });
  }

  PassType() {
    console.log(this.PassClear);
    this.PassClear = !this.PassClear;
    if (this.PassClear) {
      this.PassWordType = 'text';
    } else {
      this.PassWordType = "password";
    }
  }

  get ResIsDisabled(): boolean {
    if (this.Pass.invalid) {
      return true;
    }
    return false;
  }

  // 注册 
  OnRegister() {
    if( this.ConPassWord != this.PassWord) {
      App.ShowError("两次输入的密码不一致");
      return;
    }
    this.Service.SignIn(this.Tel, this.formGroup.value.Pass, this.VCode).subscribe(
      data => {
        App.Nav.push(App.pages.tabsPage);
      }
    );
  }
}
