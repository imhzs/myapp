import { Component, OnInit, Injectable } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { TAuthService } from '../../providers/auth';
import { UserModel } from '../../models/user-model';

@IonicPage()
@Component({
  selector: 'page-ucenter',
  templateUrl: 'ucenter.html'
})
@Injectable()
export class UcenterPage implements OnInit
{
  // 用户数据
  User: UserModel = <UserModel>{};
  
  // 页面标题
  HeadTitle: string = "我 的";

  // 手机号
  Mobile: string = "****";

  // 用户头像
  ImgData = { ImgSrc: void 0 };

  // 是否已认证
  public authText: string;

  constructor (private auth: TAuthService) {
  }

  ngOnInit() {
    this.auth.currentUser.subscribe(
      user => {
        this.User = user;
        this.Mobile = App.UserInfo.mobile.toString().substr(0, 3) + this.Mobile + App.UserInfo.mobile.toString().substr(-4);
        this.authText = App.IsIdAuthed ? '已完成' : '未完成';
      }
    );
  }
}

