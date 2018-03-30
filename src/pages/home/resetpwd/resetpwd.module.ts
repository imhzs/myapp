import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ResetpwdPage } from './resetpwd';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    ResetpwdPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(ResetpwdPage)
  ],
  entryComponents: [
    ResetpwdPage
  ]
})
export class ResetpwdPageModule {}