import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { OrderDetailPage } from './recorddetail';
import { SharedModule } from '../../../../shared';

@NgModule({
  declarations: [
    OrderDetailPage
  ],
  imports: [
  	SharedModule,
    IonicPageModule.forChild(OrderDetailPage)
  ],
  entryComponents: [
    OrderDetailPage
  ]
})
export class OrdersPageModule {}