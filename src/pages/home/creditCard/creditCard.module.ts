import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CreditCardPage } from './creditcard';
import { SharedModule } from '../../../shared';
import { CardHelper } from '../../../shared/helper/card-helper';

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
  ],
  providers: [
    CardHelper
  ]
})
export class CreditCardPageModule {}