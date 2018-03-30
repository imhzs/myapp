import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ListofbankPage } from './listofbank';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    ListofbankPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(ListofbankPage)
  ],
  entryComponents: [
    ListofbankPage
  ]
})
export class ListofbankPageModule {}