import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ChangecardsPage } from './changecards';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    ChangecardsPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(ChangecardsPage)
  ],
  entryComponents: [
    ChangecardsPage
  ]
})
export class ChangecardsPageModule {}