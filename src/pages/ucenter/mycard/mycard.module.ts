import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { MycardPage } from './mycard';
import { SharedModule } from '../../../shared';
import { CardHelper } from '../../../shared/helper/card-helper';

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
  ],
  providers: [
    CardHelper
  ]
})
export class MycardPageModule {}