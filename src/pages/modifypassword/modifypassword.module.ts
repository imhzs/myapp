import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ModifyPasswordPage } from './modifypassword';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    ModifyPasswordPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(ModifyPasswordPage)
  ],
  entryComponents: [
    ModifyPasswordPage
  ]
})
export class ModifyPasswordPageModule {}