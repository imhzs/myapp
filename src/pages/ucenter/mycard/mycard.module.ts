import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { MycardPage } from './mycard';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    MycardPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(MycardPage)
  ],
  entryComponents: [
    MycardPage
  ]
})
export class MycardPageModule {}