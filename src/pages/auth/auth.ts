import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IonicPage } from 'ionic-angular';

import { FileService } from '../../providers/fileservice';
import { HomeService } from '../../providers/homeservice';
import { TAuthService } from '../../providers/auth';

@IonicPage()
@Component({
	selector: 'page-auth',
	templateUrl: 'auth.html'
})
@Injectable()
export class AuthPage implements OnInit
{
  // 正面key
	CardFront: string = IDCARD_FRONT;

  // 反面key
	CardBack: string = IDCARD_BACK;

  // 页面标题
	HeadTitle: string = '身份认证';

  // 预览
	PreviewFiles: {} = {
		IDCARD_FRONT: '',
		IDCARD_BACK: ''
  };
  
  // 是否已上传身份证正反面
  CompletedFiles: {} = {};

	// 表单验证
  formGroup: FormGroup;

  // 身份证号
  idCardNo: FormControl;

  // 姓名
  username: FormControl;

  // 默认预览图
  DefaultImg: string = 'assets/imgs/zhengm.png';

	constructor(private fileService: FileService, private service: HomeService, private auth: TAuthService) {
    this.PreviewFiles[this.CardFront] = this.PreviewFiles[this.CardBack] = this.DefaultImg;
    this.CompletedFiles[this.CardFront] = this.CompletedFiles[this.CardBack] = false;
	}

	ngOnInit() {
		this.formGroup = new FormGroup({
      idCardNo: this.idCardNo = new FormControl('', [
        Validators.required,
        Validators.pattern(/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/)
      ]),
  
      username: this.username = new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ])
    });
	}

	// 选择文件
  OnChangeFile(cardType: string, e: any) {
    this.fileService.showAddImage().then((rst: any) => {
      this.PreviewFiles[cardType] = rst.base64;
      this.ouploadFile(cardType, rst.file);
    }).catch (error => {
      console.log(error);
    });
  }

  // 上传文件
  async ouploadFile(cType: string, file: any) {
    let res = await this.fileService.IdentityAuth(file, cType);
    if (false !== res && cType == this.CardFront) {
      this.idCardNo.setValue(res.idno);
      this.username.setValue(res.name);
    }
    this.CompletedFiles[cType] = true;
	}

  // 确认身份认证
  OnSubmit() {
    this.service.VerifyId(this.formGroup.value.idCardNo, this.formGroup.value.username).subscribe(
      resp => {
        if (resp.code === TAuthService.REQ_OK) {
          this.auth.GetUserData();
          App.Nav.setPages([{page: App.pages.tabsPage}, {page: App.pages.creditCardPage}]);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  // 是否已完成身份证上传
  get CanSubmit() {
    for (let k in this.CompletedFiles) {
      if (false === this.CompletedFiles[k]) {
        return false;
      }
    }
    if (this.idCardNo.invalid || this.username.invalid) {
      return false;
    }
    return true;
  }

  // 已完成身份认证不然能进入页面
  ionViewCanEnter() {
    return App.authenticated && !App.IsIdAuthed;
  }
}

// 附件类型-身份证正面
export const IDCARD_FRONT = 'idcard_front';

// 附件类型-身份证反面
export const IDCARD_BACK = 'idcard_back';