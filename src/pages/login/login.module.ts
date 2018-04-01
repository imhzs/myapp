import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginPage } from './login';
import { SharedModule } from '../../shared';
import * as Svc from '../../providers';

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(LoginPage)
  ],
  entryComponents: [
    LoginPage
  ],
  providers: [
    Svc.TAuthService
  ]
})
export class LoginPageModule {}