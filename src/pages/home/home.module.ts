import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { HomePage } from './home';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(HomePage)
  ],
  entryComponents: [
    HomePage
  ]
})
export class HomePageModule {}