import { Component, Injectable } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { FileService } from '../../../providers/fileservice';
import { TAuthService } from '../../../providers/auth';
import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';
import { UserModel } from '../../../models/user-model';

@IonicPage()
@Component({
  selector: 'page-uinfo',
  templateUrl: 'profile.html'
})
@Injectable()
export class ProfilePage
{
  // 全局数据
  App = window.App;

  // 页面标题
  HeadTitle: string = "个人资料";

  // 用户信息
  User: UserModel = <UserModel>{};

  constructor(private auth: TAuthService, private fileService: FileService) {
    if (TypeInfo.IsEmptyObject(App.UserInfo)) {
      this.auth.GetUserData();
      this.auth.currentUser.subscribe(
        data => {
          this.User = data;
        }
      );
    } else {
      this.User = App.UserInfo;
    }
  }

  ChangeNickName() {
    let opts =
    {
      title: '昵称',
      inputs: [
        {
          name: 'nickName',
          value: App.UserInfo.nickName
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
            this.auth.ModifyUserInfo({nickName: data.nickName});
          }
        }
      ]
    }

    App.ShowAlert(opts).then((modal) => modal.onDidDismiss(() => {}));
  }

  // 更换头像
  ChangeAvatar() {
    this.fileService.showAddImage().then((rst: any) => {
      this.uploadAvatar(rst.file);
    })
    .catch(error => {
      console.log(error);
    });
  }

  // 上传文件
  async uploadAvatar(file: any) {
    let res = await this.fileService.ImageUpload(file);
    if (false === res) {
      App.ShowError('头像上传失败');
      return;
    }
    if (TypeInfo.IsArrayLike(res) && res.length > 0) {
      this.auth.ModifyUserInfo({avatar: res[0].fileId});
    }
  }

  // 登录态控制
  ionViewCanEnter() {
    return App.authenticated;
  }
}
