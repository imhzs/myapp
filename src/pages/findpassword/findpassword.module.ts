import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { FindPasswordPage } from './findpassword';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    FindPasswordPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(FindPasswordPage)
  ],
  entryComponents: [
    FindPasswordPage
  ]
})
export class FindPasswordPageModule {}