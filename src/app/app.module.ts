import { NgModule, enableProdMode, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppVersion } from '@ionic-native/app-version';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Camera } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';

import { MyApp } from './app.component';
import { ProviderModule } from '../providers';
import { StatusBar } from '../UltraCreation/Native/StatusBar';
import { SplashScreen } from '../UltraCreation/Native/SplashScreen';
import { InterceptorModule } from './http-interceptors';

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
    HttpClientModule,
    InterceptorModule,
    ProviderModule,
    IonicModule.forRoot(MyApp, config),
    TranslateModule.forRoot(),
    IonicStorageModule.forRoot()
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

