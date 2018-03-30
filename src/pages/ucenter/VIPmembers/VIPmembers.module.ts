import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { VIPmembersPage } from './VIPmembers';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    VIPmembersPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(VIPmembersPage)
  ],
  entryComponents: [
    VIPmembersPage
  ]
})
export class VIPmembersPageModule {}