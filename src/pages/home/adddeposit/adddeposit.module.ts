import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AddDepositPage } from './adddeposit';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    AddDepositPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(AddDepositPage)
  ],
  entryComponents: [
    AddDepositPage
  ]
})
export class AddDepositPageModule {}