import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { OrdersPage } from './orders';
import { SharedModule } from '../../../shared';

@NgModule({
  declarations: [
    OrdersPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(OrdersPage)
  ],
  entryComponents: [
    OrdersPage
  ]
})
export class OrdersPageModule {}