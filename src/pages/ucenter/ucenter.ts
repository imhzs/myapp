import { Component, Injectable } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { TAuthService } from '../../providers/auth';
import { UserModel } from '../../models/user-model';
import { TypeInfo } from '../../UltraCreation/Core/TypeInfo';

@IonicPage()
@Component({
  selector: 'page-ucenter',
  templateUrl: 'ucenter.html'
})
@Injectable()
export class UcenterPage
{
  App: any = <any>window.App;

  // 用户数据
  User: UserModel = <UserModel>{};
  
  // 页面标题
  HeadTitle: string = "我 的";

  // 手机号
  Mobile: string = "****";

  // 用户头像
  ImgData = { ImgSrc: void 0 };

  constructor (private auth: TAuthService) {
    if (TypeInfo.Assigned(App.UserInfo) && TypeInfo.IsObject(App.UserInfo)) {
      this.User = App.UserInfo;
      this.formatMobile();
    }
  }

  private formatMobile() {
    this.Mobile = App.UserInfo.mobile.toString().substr(0, 3) + this.Mobile + App.UserInfo.mobile.toString().substr(-4);
  }
}

