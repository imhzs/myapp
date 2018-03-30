import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { UinfoPage } from './uinfo';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    UinfoPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(UinfoPage)
  ],
  entryComponents: [
    UinfoPage
  ]
})
export class UinfoPageModule {}