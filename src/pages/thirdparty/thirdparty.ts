import { Component, Injectable } from '@angular/core';

import { NavController, IonicPage, NavParams } from 'ionic-angular';

import { UserModel } from '../../models/user-model';
import { TAuthService } from '../../providers/auth';
import { CredentialHelper } from '../../shared/helper/credential-helper';

@IonicPage({
  segment: 'thirdLogin/:mobile/:key'
})
@Component({
  selector: 'page-thirdparty',
  templateUrl: './thirdparty.html'
})
export class ThirdPartyPage
{
  App: any = <any>window.App;

  constructor (private auth: TAuthService, private nav: NavController, private navParams: NavParams) {
    this.auth.thirdPartyLogin(this.navParams.get('mobile'), this.navParams.get('key'));
  }
}