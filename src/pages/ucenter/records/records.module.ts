import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RecordsPage } from './records';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    RecordsPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(RecordsPage)
  ],
  entryComponents: [
    RecordsPage
  ]
})
export class RecordsPageModule {}