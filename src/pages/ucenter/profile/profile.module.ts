import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ProfilePage } from './profile';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(ProfilePage)
  ],
  entryComponents: [
    ProfilePage
  ]
})
export class UinfoPageModule {}