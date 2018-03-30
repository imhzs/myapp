import { Component, Injectable } from '@angular/core';
import { SplashScreen } from '../UltraCreation/Native/SplashScreen';
import { StatusBar } from '../UltraCreation/Native/StatusBar';
import * as Svc from '../providers';

@Component({
  template: `<ion-nav #rootNavController [root]="rootPage"></ion-nav>`
})
@Injectable()
export class MyApp {
  rootPage: any = 'TabsPage';

  constructor(App: Svc.TApplication, public Auth: Svc.TAuthService, private appUpdate: Svc.CheckAppUpdate)
  {
    App.Platform.ready().then(() => {
      this.appUpdate.appUpdate();
      SplashScreen.show();
      StatusBar.hide();
      StatusBar.overlaysWebView(true);
      if (App.IsIos) {
        StatusBar.styleBlackTranslucent();
      } else {
        StatusBar.backgroundColorByHexString('#2D93F3');
      }
    })
    .then(() => {
      SplashScreen.hide();
      StatusBar.show();
    })
    .then(() => {
      // this.Auth.judgeLogin().then(root => this.rootPage = root);
    });
  }
}
