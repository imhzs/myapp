import { Component, Injectable, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SplashScreen } from '../UltraCreation/Native/SplashScreen';
import { StatusBar } from '../UltraCreation/Native/StatusBar';
import { TApplication } from '../providers/application';
import { TAuthService } from '../providers/auth';

@Component({
  template: '<ion-nav #rootNavController [root]="rootPage"></ion-nav>'
})
@Injectable()
export class MyApp
{
  @ViewChild('rootNavController') nav: NavController;

  // 启动页
  rootPage: string = 'TabsPage';

  constructor(public App: TApplication, public auth: TAuthService) {
    App.Platform.ready()
    .then(() => {
      StatusBar.hide();
      SplashScreen.show();
      StatusBar.overlaysWebView(true);
      if (App.IsIos) {
        StatusBar.styleBlackTranslucent();
      } else {
        StatusBar.backgroundColorByHexString('#569af3');
      }
    }).then(() => {
      SplashScreen.hide();
      StatusBar.show();
    }).then(() => {
      if (!this.auth.shouldPassThrough) {
        this.auth.GetUserData();
      }
    });
  }
}
