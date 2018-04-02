import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { MyCardPage } from './mycard';
import { SharedModule } from '../../../shared';
import { CardHelper } from '../../../shared/helper/card-helper';

@NgModule({
  declarations: [
    MyCardPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(MyCardPage)
  ],
  entryComponents: [
    MyCardPage
  ],
  providers: [
    CardHelper
  ]
})
export class MyCardPageModule {}