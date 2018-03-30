import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { FindpwdPage } from './findpwd';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    FindpwdPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(FindpwdPage)
  ],
  entryComponents: [
    FindpwdPage
  ]
})
export class FindpwdPageModule {}