import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LoanPage } from './loan';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    LoanPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(LoanPage)
  ],
  entryComponents: [
    LoanPage
  ]
})
export class LoanPageModule {}