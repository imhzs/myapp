import { TApplication } from './application';
import { MineService } from './mineservice';
import { HomeService } from './homeservice';
import { TAuthService } from './auth';
import { FileService } from './fileservice';
import { CheckAppUpdate } from './checkAppUpdate';

import { NgModule } from '@angular/core';

@NgModule({
  providers: [TApplication, MineService, HomeService, TAuthService, FileService, CheckAppUpdate]
})

export class ProviderModule { }
