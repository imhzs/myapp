import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { UsetupPage } from './usetup';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    UsetupPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(UsetupPage)
  ],
  entryComponents: [
    UsetupPage
  ]
})
export class UsetupPageModule {}