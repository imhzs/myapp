import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-necinfo',
    templateUrl: 'index.html'
})
export class NecInfoPage implements OnInit
{
    public headTitle: string = '提交必要资料';

    App = window.App;
    public authText: string;
    public depositCardText: string;

    ngOnInit()
    {
        console.log(App.UserInfo);
        this.authText = App.IsIdAuthed ? '已完成' : '未完成';
        this.depositCardText = App.IsBankcardAuthed ? '已完成' : '未完成';
    }

    authIdCard()
    {
        if (!App.IsIdAuthed) {
            App.Nav.push(App.RootPage.AuthCardPage);
        }
    }

    bindDepositCard()
    {
        if (!App.IsIdAuthed) {
            App.ShowToast('请先完成身份认证');
            return;
        }
        if (!App.IsBankcardAuthed) {
            App.Nav.push(App.RootPage.AddDepositCamPage, App.RootPage.CreditCardPage);
        }
    }
}