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
  Mobile: string = '';

  // 用户头像
  ImgData = { ImgSrc: void 0 };

  constructor (private auth: TAuthService) {
    if (TypeInfo.Assigned(App.UserInfo) && !TypeInfo.IsEmptyObject(App.UserInfo)) {
      this.User = App.UserInfo;
      this.formatMobile();
    }
  }

  private formatMobile() {
    this.Mobile = App.UserInfo.mobile.toString().replace(/(\d{3})(\d{4})(\d{4})/, '$1****$3');
  }

  ionViewCanEnter() {
    this.auth.GetUserData();
    this.auth.currentUser.subscribe(
      data => {
        this.User = data;
        this.formatMobile();
      }
    );
  }
}

