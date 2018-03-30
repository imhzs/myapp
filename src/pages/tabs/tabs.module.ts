import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TabsPage } from './tabs';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    TabsPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(TabsPage)
  ],
  entryComponents: [
    TabsPage
  ]
})
export class TabsPageModule {}