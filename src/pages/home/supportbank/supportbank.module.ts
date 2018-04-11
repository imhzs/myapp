import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SupportBankPage } from './supportbank';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    SupportBankPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(SupportBankPage)
  ],
  entryComponents: [
    SupportBankPage
  ]
})
export class ListofbankPageModule {}