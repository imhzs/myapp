import { Component, Injectable } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { TAuthService } from '../../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-uinfo',
  templateUrl: 'uinfo.html'
})
@Injectable()
export class UinfoPage
{
  App = window.App;

  private ImgData = { ImgSrc: void 0 };

  nickname: string;

  HeadTitle: string = "个人资料";

  UserInfo: any = [];

  ShowPhone: string = "****";

  ShowID: string = "********";

  infoName: string = " ";

  constructor(public auth: TAuthService) {
    this.InitUserInfo();
  }

  InitUserInfo() {
    this.UserInfo = App.UserInfo;
    console.log(this.UserInfo);

    if(this.UserInfo.mobile !== null) this.ShowPhone = this.UserInfo.mobile.substr(0,3) + this.ShowPhone + this.UserInfo.mobile.substr(-4);
    if(this.UserInfo.idCardNo !== null) this.ShowID = this.UserInfo.idCardNo.substr(0,6) + this.ShowID + this.UserInfo.idCardNo.substr(-4);

    this.ImgData.ImgSrc = App.UserFace;
    if(this.UserInfo.name !== null) {
      this.infoName = this.UserInfo.name.substr(-1);

      let str = '';
      for (let i = 0; i < this.UserInfo.name.length-1; i++) {
        str += '*';
      }
      this.infoName =  str +  this.infoName;
    }
  }

  ChangeNickName() {
    let _alertOption =
    {
      title: '昵称',
      inputs: [
        {
          name: 'nickName',
          value: this.UserInfo.nickName
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
            this.UserInfo.nickName = data.nickName;
            this.auth.ModifyUserInfo({nickName: data.nickName});
          }
        }
      ]
    }

    App.ShowAlert(_alertOption).then((modal) =>
      modal.onDidDismiss(() => {
      })
    );
  }

  ionViewCanEnter() {
    this.auth.CheckToken();
  }
}
