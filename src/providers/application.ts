import {Injectable, Injector} from '@angular/core';
import { Platform, Content } from 'ionic-angular';

import {TAppController} from '../UltraCreation/ng-ion/appcontroller';
import * as RootPage from '../shared/root';
import { TypeInfo } from '../UltraCreation/Core/TypeInfo';
import { CardModel } from '../models/card-model';
import { UserModel } from '../models/user-model';
import { TAuthService } from '../providers/auth';

declare global
{
  var App: TApplication | undefined;

  interface Window {
    App: TApplication | undefined;
  }
}

@Injectable()
export class TApplication extends TAppController
{
  Content: Content;

  // 平台（android|ios|wp）
  Platform: Platform;

  // 用户信息
  UserInfo: UserModel = <UserModel>{};

  // 银行卡信息
  Cards: Array<CardModel> = new Array<CardModel>();

  // 是否VIP会员
  IsVip: boolean = false;

  // 是否可以交易标识
  CanTrade: boolean = true;

  // 当前信用卡
  CurrentCreditCards: any = {};

  // 当前储蓄卡
  CurrentDepositCard: any = {};

  public RootPage: any = RootPage;

  private HardwareBackButtonDisabled = false;

  private BackButtonPressed: boolean = false;

  constructor(Injector: Injector, public auth: TAuthService) {
    super(Injector);
    window.App = this;
    this.Platform.ready().then(() => {
      this.Platform.registerBackButtonAction(() => {
        if (this.HardwareBackButtonDisabled) {
          return;
        }
        if (App.Nav.canGoBack()) {
          App.Nav.pop();
          return;
        }

        if (this.BackButtonPressed) {
          this.Platform.exitApp();
        } else {
          this.ShowToast('再按一次退出5u卡贝');
          this.BackButtonPressed = true;
          setTimeout(() => {
            this.BackButtonPressed = false;
          }, 2000)
        }
      });

      if(this.IsAndroid) {
        window.addEventListener('native.keyboardshow', this.keyboardShowHandler.bind(this));
        window.addEventListener('native.keyboardhide', this.keyboardHideHandler.bind(this));
      }

      this.auth.currentUser.subscribe(data => {
        this.UserInfo = data;
      });
    });
  }

  keyboardShowHandler(e) {
    if(window.scrollY < 100) {
      window.scrollTo(0, e.keyboardHeight);
    }
  }

  keyboardHideHandler(e) {
    if(window.scrollY != 0) {
      window.scrollTo(0, 0);
    }
  }

  DisableHardwareBackButton() {
    this.HardwareBackButtonDisabled = true;
  }

  EnableHardwareBackButton() {
    this.HardwareBackButtonDisabled = false;
  }

  ShowToast(MsgOrConfig: string | Object): Promise<any> {
    if (MsgOrConfig instanceof Object) {
      return super.ShowToast(MsgOrConfig);
    } else {
      return super.ShowToast({message: MsgOrConfig, position: 'middle', cssClass:'toast-default', duration: 1500});
    }
  }

  ShowLoading(MsgOrConfig?: string | Object): Promise<any> {
    if (MsgOrConfig instanceof Object) {
      return super.ShowLoading(MsgOrConfig);
    } else {
      return super.ShowLoading({spinner: 'ios-small', content: MsgOrConfig, cssClass: 'loading-default'});
    }
  }

  ShowError(err: any, duration: number = 3000, position: 'top' | 'bottom' | 'middle' = 'middle'): Promise<void> {
    return super.ShowError(err, {
        duration: duration, position: position,
        style: 'toast-error',  prefix_lang: 'hint.'});
  }

  get UserFace(): any {
    if(TypeInfo.Assigned(localStorage.getItem('imageface'))) {
      let avatar = localStorage.getItem('imageface');
      return { backgroundImage : `url(${avatar})` };
    }
    return null;
  }

  IsReal(page?: any) {
    return false;
    // if (App.UserInfo.idAuthed !== 1) {
    //   App.Nav.push(App.RootPage.NoldentifyPage);
    // } else if(page) {
    //   App.Nav.push(page);
    // } else {
    //   return;
    // }
  }

  // 是否已完成身份认证
  get IsIdAuthed(): boolean {
    return App.UserInfo.idAuthed > 0;
  }

  // 是否完成储蓄卡验证
  get IsBankcardAuthed(): boolean {
    return App.UserInfo.bankcardAuthed > 0;
  }

  // 是否已完成身份认证
  get IsCompleteAuthed(): boolean {
    return this.IsIdAuthed && this.IsBankcardAuthed;
  }

  get IconFace(): boolean {
    if(this.UserFace === null && this.UserInfo.sex === '男') {
      return true;
    }
    return false;
  }
}
