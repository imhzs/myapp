import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavParams, IonicPage } from 'ionic-angular';

import { HomeService } from '../../../providers/homeservice';
import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';
import { TAuthService } from '../../../providers/auth';
import { FileService, BANKCARD_FRONT } from '../../../providers/fileservice';

@IonicPage()
@Component({
  selector: 'page-adddeposit',
  templateUrl: 'adddeposit.html'
})
@Injectable()
export class AddDepositPage implements OnInit
{
  HeadTitle: string = "添加储蓄卡";

  IdCard: string;

  BankName: string = '请选择开户银行';

  BranchName: string = '请选择具体开户支行';

  BranchCode: string = '';

  TranCode: string = '';

  KeyWord: string;

  BranchList: Array<any> = [];

  Form_Group: FormGroup;

  BankCode: string = '';

  CardNo: FormControl;

  Mobile: FormControl;

  BankCardFront: string = BANKCARD_FRONT;

  App: any = <any>window.App;

  constructor(public Service: HomeService, public navParams: NavParams, private Auth: TAuthService, private fileService: FileService) {
  }

  ngOnInit() {
    if(!TypeInfo.Assigned(App.UserInfo)) {
      return;
    }
    
    this.GetIdCard(App.UserInfo['idCardNo']);
    this.Form_Group = new FormGroup({
      CardNo: this.CardNo = new FormControl('', [
        Validators.required,
        Validators.minLength(16)
      ]),

      Mobile: this.Mobile = new FormControl('', [
        Validators.required,
        Validators.pattern(/^1[3|4|5|7|8][0-9]{9}$/)
      ])
    });

    if (!App.IsIdAuthed) {
      let alertOpts = {
        title: '温馨提示',
        message: '为了您的资金安全，首次刷卡需先完成身份认证',
        cssClass: 'text-left',
        buttons: [
          {
            text: '取消',
            role: 'cancel',
            handler: () => {
              App.Nav.push('HomePage');
            }
          },
          {
            text: '确认',
            handler: () => {
              App.Nav.push('AuthPage');
            }
          }
        ]
      };
      App.ShowAlert(alertOpts);
    }
  }

  // 卡号是否符合规则
  get CompleteBtnIsDisabled(): boolean {
    if (this.CardNo.invalid) {
      return true;
    }
    return false;
  }

  // 验证身份证
  GetIdCard(IdNo) {
    if (!TypeInfo.Assigned(IdNo)) {
      return;
    }
    this.IdCard = IdNo.substr(0, 6);
    for (let i = 0; i < (IdNo.length - 10); i ++) {
      this.IdCard += '*'
    }
    this.IdCard += IdNo.substr(-4);
  }

  // 选择开户行
  ClickOpenBank() {
    if (this.CardNo.invalid) {
      return App.ShowError('请先输入银行卡卡号');
    }
    App.ShowModal(App.RootPage.ListofbankPage).then((modal) => {
      modal.onDidDismiss(data => {
        if (data) {
          this.BankName = data.name;
          this.BankCode = data.code;
          this.BranchCode = '';
          this.BranchName = '请选择具体开户支行';
        }
      });
    });
  }

  // 选择支行
  ClickBranchBank() {
    if (!this.BankCode) {
      return App.ShowError('请先选择开户银行');
    }

    App.ShowModal(App.RootPage.BranchcardPage, {Bank: this.BankName, Code: this.BankCode}).then((modal) => {
      modal.onDidDismiss(data => {
        if (data) {
          this.BranchName = data.name;
          this.BranchCode = this.BankCode;
          this.TranCode = data.bankCode;
        }
      });
    });
  }

  // 完成添加
  Finish() {
    this.Service.AddDeposiCard(this.Form_Group.value.CardNo, this.BankName,
      this.TranCode, this.BranchName, this.Form_Group.value.Mobile).subscribe(res => {
        this.Auth.currentUser.subscribe(data => {
          App.Nav.push(App.RootPage[this.navParams.data]);
        });
      });
  }

  // 选择文件
  onChangeFile(cType: string, e: any) {
    console.log(cType);
    this.fileService.showAddImage().then((rst: any) => {
        console.log(rst);
        console.log(rst.file);
        this.uploadFile(rst.file, cType);
    }).catch (error => {
        console.log(error);
    });
  }

  // 上传文件
  async uploadFile(file: File, cType: string) {
    let res = await this.fileService.OcrUpload('file', file, cType);
    if (false === res) {
      return;
    }

    this.CardNo.setValue(res.cardNo.replace(/\s*/g, ''));
    this.BankName = res.bank;
    this.BankCode = '105';
  }
}
