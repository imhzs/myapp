import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { RegisterPage } from './register';
import { SharedModule } from '../../shared';

@NgModule({
  declarations: [
    RegisterPage
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(RegisterPage)
  ],
  entryComponents: [
    RegisterPage
  ]
})
export class RegisterPageModule {}