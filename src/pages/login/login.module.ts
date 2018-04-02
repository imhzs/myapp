import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginPage } from './login';
import { SharedModule } from '../../shared';

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
  ]
})
export class LoginPageModule {}