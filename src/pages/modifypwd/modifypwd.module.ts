import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ModifypwdPage } from './modifypwd';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    ModifypwdPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(ModifypwdPage)
  ],
  entryComponents: [
    ModifypwdPage
  ]
})
export class ModifypwdPageModule {}