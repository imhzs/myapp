import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage } from 'ionic-angular';

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

  Form_Group: FormGroup;

  Tel: FormControl;

  Pass: FormControl;

  constructor(private Auth: TAuthService) {
  }

  ngOnInit()
  {
    this.Form_Group = new FormGroup({
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
    if (this.Tel.invalid || this.Pass.invalid) return true;
    return false;
  }

  Login() {
    this.Auth.Login(this.Form_Group.value.Tel, this.Form_Group.value.Pass);
  }
}
