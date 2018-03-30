import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CardInforPage } from './cardInfor';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    CardInforPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(CardInforPage)
  ],
  entryComponents: [
    CardInforPage
  ]
})
export class CardInforPageModule {}