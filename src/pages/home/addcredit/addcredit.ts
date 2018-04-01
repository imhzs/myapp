import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NavParams, IonicPage } from 'ionic-angular';

import { HomeService } from '../../../providers/homeservice';
import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';
import { TAuthService } from '../../../providers/auth';
import { FileService, BANKCARD_FRONT } from '../../../providers/fileservice';

@IonicPage()
@Component({
  selector: 'page-addcredit',
  templateUrl: 'addcredits.html'
})
export class AddCreditPage implements OnInit
{
  App = window.App;

  PrePage: string;

  HeadTitle: string = "添加信用卡";

  ShowIDCard: string;

  AddWrong: boolean = false;

  WrongMsg: string = '';

  Form_Group_Card: FormGroup;

  CardNo: FormControl;

  Mobile: FormControl;

  VerifyCode: FormControl;

  BankCardFront: string = BANKCARD_FRONT;

  constructor(public Service: HomeService, public navParams: NavParams, private Auth: TAuthService, private fileService: FileService) {
    this.GetIdCard(App.UserInfo.idCardNo);
  }

  ngOnInit() {
    this.Form_Group_Card = new FormGroup({
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

  get CompleteBtnIsDisabled(): boolean {
    if (this.CardNo.invalid || this.Mobile.invalid) {
      return true;
    }
    return false;
  }

  GetIdCard(IdNo) {
    if (TypeInfo.Assigned(IdNo)) {
      this.ShowIDCard = IdNo.substr(0, 6);
      for (let i = 0; i < (IdNo.length - 10); i ++) {
        this.ShowIDCard += '*'
      }
      this.ShowIDCard += IdNo.substr(-4);
    }
  }

  // 提交数据
  AddCard() {
    this.Service.AddCreditCard(this.Form_Group_Card.value.CardNo, this.Form_Group_Card.value.Mobile).then(res => {
      if (false !== res) {
        App.ShowToast('信用卡添加成功');
        this.Auth.GetUserData().then(()=>App.Nav.push(App.RootPage[this.navParams.data]));
      }
    });
  }

  // 选择文件
  OnChangeFile(e) {
    this.fileService.showAddImage().then((rst: any) => {
      console.log(rst);
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
}
