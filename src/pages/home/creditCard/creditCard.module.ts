import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CreditCardPage } from './creditcard';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    CreditCardPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(CreditCardPage)
  ],
  entryComponents: [
    CreditCardPage
  ]
})
export class CreditCardPageModule {}