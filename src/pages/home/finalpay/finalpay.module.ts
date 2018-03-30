import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { FinalpayPage } from './finalpay';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    FinalpayPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(FinalpayPage)
  ],
  entryComponents: [
    FinalpayPage
  ]
})
export class FinalpayPageModule {}