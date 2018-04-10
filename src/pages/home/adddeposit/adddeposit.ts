import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavParams, IonicPage } from 'ionic-angular';

import { HomeService } from '../../../providers/homeservice';
import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';
import { TAuthService } from '../../../providers/auth';
import { FileService, BANKCARD_FRONT } from '../../../providers/fileservice';
import { ListofbankPage } from '../listofbank/listofbank';
import { BranchcardPage } from '../branchcard/branchcard';
import { AuthHelper } from '../../../shared/helper/auth-helper';

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

  formGroup: FormGroup;

  BankCode: string = '';

  CardNo: FormControl;

  Mobile: FormControl;

  BankCardFront: string = BANKCARD_FRONT;

  App: any = <any>window.App;

  constructor(public Service: HomeService, public navParams: NavParams, private auth: TAuthService, private fileService: FileService) {
    this.GetIdCard(App.UserInfo.idCardNo);
    this.auth.currentUser.subscribe(
      data => {
        AuthHelper.check();
        this.GetIdCard(App.UserInfo.idCardNo);
      }
    );
  }

  ngOnInit() { 
    this.formGroup = new FormGroup({
      CardNo: this.CardNo = new FormControl('', [
        Validators.required,
        Validators.minLength(16)
      ]),

      Mobile: this.Mobile = new FormControl('', [
        Validators.required,
        Validators.pattern(/^1[3|4|5|7|8][0-9]{9}$/)
      ])
    });
  }

  ionViewDidEnter() {
    if (TypeInfo.Assigned(App.UserInfo) && !TypeInfo.IsEmptyObject(App.UserInfo)) {
      AuthHelper.check();
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
    App.ShowModal(ListofbankPage).then((modal) => {
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

    App.ShowModal(BranchcardPage, {Bank: this.BankName, Code: this.BankCode}).then((modal) => {
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
    this.Service.AddDeposiCard(this.formGroup.value.CardNo, this.BankName,
      this.TranCode, this.BranchName, this.formGroup.value.Mobile).subscribe(res => {
        this.Service.GetCardList();
        this.auth.GetUserData();
        this.auth.currentUser.subscribe(data => {
          if (this.navParams.get('page')) {
            App.Nav.push(this.navParams.get('page'));
          } else {
            App.Nav.push(App.pages.myCardPage);
          }
        });
      });
  }

  // 选择文件
  onChangeFile(cType: string, e: any) {
    this.fileService.showAddImage().then((rst: any) => {
      this.uploadFile(rst.file, cType);
    }).catch (error => {
      console.log(error);
    });
  }

  // 上传文件
  async uploadFile(file: File, cType: string) {
    let res = await this.fileService.OcrUpload('file', file, cType);
    if (TypeInfo.Assigned(res) && TypeInfo.IsObject(res)) {
      this.CardNo.setValue(res.cardNo.replace(/\s*/g, ''));
      this.BankName = res.bank;
      this.BankCode = '105';
    }
  }

  ionViewCanEnter() {
    this.auth.CheckToken();
  }
}
