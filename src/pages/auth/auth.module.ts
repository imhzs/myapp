import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AuthPage } from './auth';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    AuthPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(AuthPage)
  ],
  entryComponents: [
    AuthPage
  ]
})
export class AuthPageModule {}