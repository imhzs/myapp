import { NgModule, enableProdMode, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppVersion } from '@ionic-native/app-version';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Camera } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';

import { MyApp } from './app.component';
import * as Svc from '../providers';
import { StatusBar } from '../UltraCreation/Native/StatusBar';
import { SplashScreen } from '../UltraCreation/Native/SplashScreen';

enableProdMode();

let config = {
  backButtonText: '',
  pageTransitionDelay: 0,
  swipeBackEnabled: false,
  preloadModules: true
};

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, config),
    TranslateModule.forRoot()
  ],
  bootstrap: [IonicApp],
  declarations: [
    MyApp
  ],
  entryComponents: [
    MyApp
  ],
  providers: [
    Device,
    FileTransfer,
    Camera,
    AppVersion,
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Svc.TApplication,
    Svc.TAuthService,
    Svc.FileService,
    Svc.MineService,
    Svc.HomeService,
    Svc.CheckAppUpdate
  ]
})
export class AppModule {}

