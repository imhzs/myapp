import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { ThirdPartyPage } from './thirdparty';

@NgModule({
  declarations: [
    ThirdPartyPage
  ],
  imports: [
    IonicPageModule.forChild(ThirdPartyPage)
  ],
  entryComponents: [
    ThirdPartyPage
  ]
})
export class ThirdPartyPageModule { }