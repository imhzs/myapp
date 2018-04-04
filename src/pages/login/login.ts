import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage, NavParams } from 'ionic-angular';

import { TAuthService } from '../../providers/auth';

@IonicPage()
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

  constructor(private Auth: TAuthService, public navParams: NavParams) {
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
