import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ConfirminfoPage } from './confirminfo';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    ConfirminfoPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(ConfirminfoPage)
  ],
  entryComponents: [
    ConfirminfoPage
  ]
})
export class ConfirminfoPageModule {}