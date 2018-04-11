import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
const _ = require('lodash');

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { TypeInfo } from '../UltraCreation/Core/TypeInfo';
import { TBaseService } from './pub_service';
import { HomeService } from './homeservice';
import { CredentialHelper } from '../shared/helper/credential-helper';
import { UserModel } from '../models/user-model';

@Injectable()
export class TAuthService extends TBaseService
{
  App: any = <any>window.App;

  public subject: Subject<UserModel> = new Subject<UserModel>();

  constructor(protected http: HttpClient, private location: Location, private homeService: HomeService) {
    super(http);
  }

  // 获取当前登录用户
  get currentUser(): Observable<UserModel> {
    return this.subject.asObservable();
  }

  // 更新用户数据
  public updateUser(user: any) {
    this.subject.next(Object.assign({}, user));
  }

  // 登录
  Login(Tel: number, Password: string) {
    this.SetParam('mobile', Tel.toString());
    this.SetParam('password', this.Md5T(Password).toString());

    this.Post('kpay/api/login').subscribe(
      resp => {
        if (resp.code === TBaseService.REQ_OK) {
          CredentialHelper.setToken(resp.data.token);
          this.GetUserData();
          this.homeService.GetCardList();
          App.Nav.setPages([{page: App.pages.tabsPage}]);
        }
      },
      error => {
        console.log(error);
      }
    );
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
    CredentialHelper.removeToken();
    App.UserInfo = null;
    App.DisableHardwareBackButton();
    App.Nav.setPages([{page: App.pages.tabsPage}, {page: App.pages.loginPage}]);
  }

  // 判断登录
  get IsLogin() {
    return TypeInfo.Assigned(CredentialHelper.getToken());
  }

  // 校验token有效性
  async CheckToken() {
    return await this.Post('kpay/api/checkToken').toPromise();
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
    return this.Post('kpay/api/user/info').subscribe(
      resp => {
        let userData: UserModel = resp.data;
        this.updateUser(userData);
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
      resp => {
        if (TypeInfo.Assigned(resp.data) && !TypeInfo.IsEmptyObject(resp.data)) {
          CredentialHelper.setToken(resp.data.token);
          this.GetUserData();
          this.homeService.GetCardList();
          App.Nav.setPages([{page: App.pages.tabsPage}, {page: App.pages.creditCardPage}]);
        } else {
          App.Nav.setRoot(App.pages.loginPage);
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  // 重新登录
  thirdPartyReLogin() {
    let mobile = CredentialHelper.getMobile();
    let secret = CredentialHelper.getSecret();
    this.thirdPartyLogin(mobile, secret);
  }

  // 是否不需要登录
  shouldPassThrough() {
    let paths = ['/register', '/login', '/findpassword', '/home', '/tabs/首页/home', '/thirdlogin'];
    return _.indexOf(paths, decodeURIComponent(this.location.path()).toLocaleLowerCase()) > -1;
  }
}