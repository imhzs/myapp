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
	CardFront: string = 'idcard_front';

	CardBack: string = 'idcard_back';

	ExampleFront: string = '';

	ExampleBank: string = '';

	HeadTitle: string = '身份认证';

	PreviewFiles: {} = {
		back: '',
		front: ''
	};

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
    console.log(cardType);
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
	}

  // 确认身份认证
  OnSubmit() {
    this.service.VerifyId(this.formGroup.value.idCardNo, this.formGroup.value.username).subscribe(
      data => {
        this.auth.GetUserData();
        App.Nav.push('CreditCardPage');
      },
      error => {
        console.log(error);
      }
    );
  }

  // 已完成身份认证不然能进入页面
  ionViewCanEnter() {
    return !App.IsIdAuthed;
  }
}