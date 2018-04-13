import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CheckoutPage } from './checkout';
import { SharedModule } from '../../../shared';
import { CheckoutHelper } from '../../../shared/helper/checkout-helper';

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
  ],
  providers: [CheckoutHelper]
})
export class CheckoutPageModule {}