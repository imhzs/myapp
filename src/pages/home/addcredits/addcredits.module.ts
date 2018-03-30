import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AddCreditPage } from './addcredits';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    AddCreditPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(AddCreditPage)
  ],
  entryComponents: [
    AddCreditPage
  ]
})
export class CreditCardPageModule {}