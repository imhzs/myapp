import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SetPwdPage } from './setPwd';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    SetPwdPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(SetPwdPage)
  ],
  entryComponents: [
    SetPwdPage
  ]
})
export class SetPwdPageModule {}