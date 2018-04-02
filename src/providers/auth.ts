import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { TypeInfo } from '../UltraCreation/Core/TypeInfo';
import { TBaseService } from './pub_service';
import { Network } from '../UltraCreation/Native/Network'
import { CredentialHelper } from '../shared/helper/credential-helper';
import { UserModel } from '../models/user-model';

@Injectable()
export class TAuthService extends TBaseService
{
  App: any = <any>window.App;

  public subject: Subject<UserModel> = new Subject<UserModel>(); 

  constructor(protected http: HttpClient) {
    super(http);
  }

  judgeLogin() {
    if (!this.IsLogin) {
      return 'TabsPage';
    }
    this.CheckToken().subscribe(
      data => {
        this.GetUserData();
      },
      error => {
        console.log(error);
      }
    );
  }

  get currentUser(): Observable<UserModel> {
    return this.subject.asObservable();
  }

  // 登录
  Login(Tel: number, Password: string) {
    this.SetParam('mobile', Tel.toString());
    this.SetParam('password', this.Md5T(Password).toString());

    this.Post('kpay/api/login');
  }

  // 校验找回密码短信验证码
  GetFindPwdData(tel: number, VCode: string) {
    this.SetParam('mobile', tel.toString());
    this.SetParam('veriCode', VCode);

    return this.Post('kpay/api/checkPwdVeriCode');
  }

  // 获取找回密码短信验证码
  GetResetPwdData(tel: number) {
    this.SetParam('mobile', tel.toString());
    return this.Post('kpay/api/getPwdVericode');
  }

  // 修改用户密码
  GetchangePsdData(tel: number, pwd: string, VCode: string) {
    this.SetParam('mobile', tel.toString());
    this.SetParam('password', this.Md5T(pwd).toString());
    this.SetParam('veriCode', VCode);

    return this.Post('kpay/api/user/changePassword');
  }

  // 获取修改密码验证码
  getPwdVericode(mobile: number) {
    this.SetParam('mobile', mobile);
    return this.Post('kpay/api/getPwdVericode');
  }

  // 注册
  SignIn(Tel: number, Password: string, Code?: string, Recommend?: string) {
    this.SetParam('mobile', Tel.toString());
    this.SetParam('password', this.Md5T(Password).toString());
    this.SetParam('veriCode', Code);

    if (Recommend) {
      this.SetParam('referee', Recommend);
    }

    return this.Post('kpay/api/register');
  }

  // 获取注册验证码
  GetVerifyCode(Tel: number) {
    this.SetParam('mobile', Tel.toString());
    return this.Post('kpay/api/getVericode');
  }

  // 验证注册验证码
  CheckVerifyCode(Tel: number, VCode: string) {
    this.SetParam('mobile', Tel.toString());
    this.SetParam('veriCode', VCode);

    return this.Post('kpay/api/checkRegVeriCode');
  }

  // 退出登陆
  Logout() {
    localStorage.removeItem('token');
    App.UserInfo = null;
    App.DisableHardwareBackButton();
    App.Nav.push(App.RootPage.StartPage);
  }

  // 判断登录
  get IsLogin() {
    return TypeInfo.Assigned(localStorage.getItem('token'));
  }

  // 校验token有效性
  CheckToken() {
    return this.Post('kpay/api/checkToken');
  }

  // 修改用户信息
  ModifyUserInfo(json) {
    for (let k in json) {
      this.SetParam(k, json[k]);
    }
    this.Post('kpay/api/user/modify').subscribe(
        data => {
          console.log(data);
        }
      );
  }

  // 获取用户信息
  GetUserData() {
    return this.Post('kpay/api/user/info').map((resp: any) => {
      let userResponseJson: UserModel = resp.data;
      this.subject.next(Object.assign({}, userResponseJson));
    })
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  // 第三方登录
  thirdPartyLogin(mobile: string, key: string) {
    CredentialHelper.setMobile(mobile);
    CredentialHelper.setSecret(key);

    this.SetParam('mobile', mobile);
    this.SetParam('key', key);

    return this.Post('kpay/api/login/partner').subscribe(
      data => {
        CredentialHelper.setToken(data.data.token);
        this.GetUserData();
      },
      error => {
        console.error(error);  
      }
    );
  }
}