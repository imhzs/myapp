import { Component, Injectable } from '@angular/core';

import { IonicPage, NavParams } from 'ionic-angular';

import { TAuthService } from '../../providers/auth';

@IonicPage({
  segment: 'thirdLogin/:mobile/:key'
})
@Component({
  selector: 'page-thirdparty',
  templateUrl: './thirdparty.html'
})
@Injectable()
export class ThirdPartyPage
{
  App: any = <any>window.App;

  constructor (private auth: TAuthService, private navParams: NavParams) {
    this.auth.thirdPartyLogin(this.navParams.get('mobile'), this.navParams.get('key'));
  }
}