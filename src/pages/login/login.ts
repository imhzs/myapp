import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { URLSearchParams } from '@angular/http';
import { IonicPage, NavParams, NavController } from 'ionic-angular';

import { TAuthService } from '../../providers/auth';

@IonicPage({
  segment: 'login/:mobile/:key'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
@Injectable()
export class LoginPage implements OnInit
{
  App = window.App;

  formGroup: FormGroup;

  Tel: FormControl;

  Pass: FormControl;

  findPasswordPage: any;

  private searchParams: URLSearchParams;

  constructor(private Auth: TAuthService, public navParams: NavParams, private nav: NavController) {
    this.searchParams = new URLSearchParams(location.search);
    this.Auth.thirtyLoogin(this.navParams.get('mobile'), this.navParams.get('key'));
    console.log(App.UserInfo);
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      Tel: this.Tel = new FormControl('', [
        Validators.required,
        Validators.pattern(/^1[3|4|5|7|8][0-9]{9}$/)
      ]),

      Pass: this.Pass = new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  get LoginDisabled(): boolean {
    if (this.Tel.invalid || this.Pass.invalid) {
      return true;
    }
    return false;
  }

  Login() {
    this.Auth.Login(this.formGroup.value.Tel, this.formGroup.value.Pass);
  }
}
