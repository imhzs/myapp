import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { BranchcardPage } from './branchcard';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    BranchcardPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(BranchcardPage)
  ],
  entryComponents: [
    BranchcardPage
  ]
})
export class BranchcardPageModule {}