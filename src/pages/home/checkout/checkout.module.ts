import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CheckoutPage } from './checkout';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    CheckoutPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(CheckoutPage)
  ],
  entryComponents: [
    CheckoutPage
  ]
})
export class CheckoutPageModule {}