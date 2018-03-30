import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { StartPage } from './start';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    StartPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(StartPage)
  ],
  entryComponents: [
    StartPage
  ]
})
export class StartPageModule {}