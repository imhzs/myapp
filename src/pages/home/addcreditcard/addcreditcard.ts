import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavParams, IonicPage } from 'ionic-angular';

import { HomeService } from '../../../providers/homeservice';
import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';
import { TAuthService } from '../../../providers/auth';
import { FileService, BANKCARD_FRONT } from '../../../providers/fileservice';
import { AuthHelper } from '../../../shared/helper/auth-helper';

@IonicPage()
@Component({
  selector: 'page-addcreditcard',
  templateUrl: 'addcreditcard.html'
})
export class AddCreditCardPage implements OnInit
{
  App: any = <any>window.App;

  PrePage: string;

  HeadTitle: string = "添加信用卡";

  ShowIDCard: string;

  AddWrong: boolean = false;

  WrongMsg: string = '';

  formGroup: FormGroup;

  CardNo: FormControl;

  Mobile: FormControl;

  VerifyCode: FormControl;

  BankCardFront: string = BANKCARD_FRONT;

  constructor(public Service: HomeService, public navParams: NavParams, private auth: TAuthService, private fileService: FileService) {
    if (TypeInfo.Assigned(App.UserInfo) && !TypeInfo.IsEmptyObject(App.UserInfo)) {
      this.ShowIDCard = App.UserInfo.idCardNo;
    }
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
    this.auth.GetUserData();
    this.auth.currentUser.subscribe(
      data => {
        AuthHelper.check();
        this.ShowIDCard = App.UserInfo.idCardNo;
      }
    );
  }

  get CompleteBtnIsDisabled(): boolean {
    if (this.CardNo.invalid || this.Mobile.invalid) {
      return true;
    }
    return false;
  }

  // 提交数据
  AddCard() {
    this.Service.AddCreditCard(this.formGroup.value.CardNo, this.formGroup.value.Mobile).subscribe(
      data => {
        if (data.code === TAuthService.REQ_OK) {
          this.Service.GetCardList();
          this.auth.GetUserData();
          if (this.navParams.get('page')) {
            App.Nav.push(this.navParams.get('page'));
          } else {
            App.Nav.push(App.pages.myCardPage);
          }
        }
      }
    );
  }

  // 选择文件
  OnChangeFile(e) {
    this.fileService.showAddImage().then((rst: any) => {
      this.uploadFile(rst.file, BANKCARD_FRONT);
    }).catch (error => {
      console.log(error);
    });
  }

  // 保存文件
  async uploadFile(file: any, cType: string) {
    let res = await this.fileService.OcrUpload('file', file, cType);
    if (false !== res) {
      this.CardNo.setValue(res.cardNo.replace(/\s*/g, ''));
    }
  }

  ionViewCanEnter() {
    return App.authenticated;
  }
}
