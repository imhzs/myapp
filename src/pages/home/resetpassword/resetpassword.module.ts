import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ResetPasswordPage } from './resetpassword';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    ResetPasswordPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(ResetPasswordPage)
  ],
  entryComponents: [
    ResetPasswordPage
  ]
})
export class ResetPasswordPageModule {}