import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SetPasswordPage } from './setpassword';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    SetPasswordPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(SetPasswordPage)
  ],
  entryComponents: [
    SetPasswordPage
  ]
})
export class SetPasswordPageModule {}