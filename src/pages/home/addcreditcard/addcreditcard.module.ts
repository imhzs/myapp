import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AddCreditCardPage } from './addcreditcard';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    AddCreditCardPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(AddCreditCardPage)
  ],
  entryComponents: [
    AddCreditCardPage
  ]
})
export class AddCreditCardPageModule {}