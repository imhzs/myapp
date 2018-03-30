import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { UcenterPage } from './ucenter';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    UcenterPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(UcenterPage)
  ],
  entryComponents: [
    UcenterPage
  ]
})
export class UcenterPageModule {}