import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'page-ucenter',
  templateUrl: 'index.html'
})

export class UcenterPage implements OnInit
{
  App = window.App;
  
  HeadTitle: string = "我 的";

  ShowPhone: string = "****";

  ImgData = { ImgSrc: void 0 };

  // private Wechat = (<any>window).Wechat;

  public authText: string;

  constructor()
  {
    this.InitUserInfo();
  }

  ngOnInit()
  {
    // this.authText = App.IsIdAuthed ? '已完成' : '未完成';
  }

  InitUserInfo()
  {
    console.log(App.UserInfo);
    // this.ShowPhone = App.UserInfo.mobile.substr(0,3) + this.ShowPhone + App.UserInfo.mobile.substr(-4);
  }

  OnAuthClick()
  {
  }
}

