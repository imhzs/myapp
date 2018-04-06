import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { TAuthService } from '../../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-usetup',
  templateUrl: 'usetup.html'
})
export class UsetupPage
{
  App = window.App;

  HeadTitle: string = "设 置";

  constructor(public auth: TAuthService) {
  }

  ChangeNickName() {
    let _alertOption =
    {
      title: '密码',
      inputs: [
        {
          name: 'PassWord',
          // value: this.UserInfo.nickName
        },
      ],
      buttons: [
        {
          text: '取消'
        },
        {
          text: '保存',
          handler: data => {
            // 请求接口保存新昵称
            // this.UserInfo.nickName = data.nickName;
            // this.auth.ModifyUserInfo({nickName: data.nickName});
          }
        }
      ]
    }

    App.ShowAlert(_alertOption).then((modal) =>
      modal.onDidDismiss(() =>
      {

      })
    );
  }

  Logout() {
    this.auth.Logout();
  }

  ionViewCanEnter() {
    this.auth.CheckToken();
  }
}
