import { Component, OnInit, ViewChild, ElementRef, Injectable } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { setTimeout, clearTimeout } from 'timers';

import { TAuthService } from '../../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-finalpay',
  templateUrl: 'finalpay.html',
})
@Injectable()
export class FinalpayPage implements OnInit
{
  headTitle :string = '银联支付';

  action: string;

  value: string;

  browser: any = {
    isLoaded: false, // 网页是否被加载
    proObj: null, // 进度条对象
    progress: 0, // 网页访问的进度条
    secUrl: '', // 安全链接
    title: '加载中',
    url: '',
    share: null // 是否具有分享功能（传递一个分享对象ShareModel过来）
  };

  flag: boolean = true;

  this_html: any = '';

  htmltext: any = '';

  formAction: string = '';

  @ViewChild('paymentForm') paymentForm: ElementRef;

  // 分享控制的配置
  shareConfig: any = {
    isShow: false
  };

  constructor(public navParams: NavParams, private sanitizer: DomSanitizer, private auth: TAuthService) {
  }

  ngOnInit() {
    let bodyText = this.navParams.get('innerHtml').toString();

    if (bodyText.indexOf('form') == -1 && bodyText.indexOf('body') > -1) {
      this.flag = false;
      let tmp_html = bodyText.match(/<body[^>]*>(.*)?<\/body>/)[1];
      tmp_html = this.sanitizer.bypassSecurityTrustHtml(tmp_html);
      this.this_html = tmp_html;
    } else if(bodyText.indexOf('form') > -1) {
      this.flag = true;
      let arr = bodyText.match(/<form[^>]*>(.*)?<\/form>/);
      let tmpHtml = arr[1];
      this.formAction = this.getFormAction(arr[0]);
      // tmpHtml = tmpHtml.replace('<form', '<form target="targetIframe"');
      tmpHtml = this.sanitizer.bypassSecurityTrustHtml(tmpHtml);
      this.htmltext = tmpHtml;
    }

    let browser = this.navParams.get('browser');
    if (browser) {
      this.flag = true;
      this.browser.title = browser.title;
      this.browser.url = browser.url;
      this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(browser.url);

      if (browser.share) {
        this.browser.share = browser.share;
      }
    } else {
      this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.browser.url);
    }
    this.reload();
  }

  ionViewDidEnter() {
    if (this.flag && this.htmltext.length > 0) {
      this.paymentForm.nativeElement.submit();
    }
    if(!this.browser.proObj) {
      this.browser.proObj = document.getElementById('progress');
    }

    this.onprogress();
  }

  private random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // 网页访问进度
  private onprogress() {
    // 随机时间
    let timeout = this.random(10, 30);
    let timer = setTimeout(() => {
      if(this.browser.isLoaded) {
        this.browser.proObj.style.width = '100%';
        clearTimeout(timer);
      } else {
        // 随机进度
        this.browser.progress += this.random(1, 5);

        // 随机进度不能超过 90%，以免页面还没加载完毕，进度已经 100% 了
        if(this.browser.progress > 90) {
          this.browser.progress = 90;
        }

        this.browser.proObj.style.width = this.browser.progress + '%';
        this.onprogress();
      }
    }, timeout);
  }

  // 如果iframe页面加载成功后
  loaded() {
    this.browser.isLoaded = true;
  }

  // 重新加载页面
  reload() {
    let title = this.browser.title;
    let url = this.browser.secUrl;
    this.browser.title = '加载中';
    this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');

    setTimeout(() => {
      this.browser.isLoaded = false;
      this.browser.progress = 0;
      if (!this.browser.proObj) {
        this.browser.proObj = document.getElementById('progress');
      }

      this.onprogress();
      this.browser.title = title;
      this.browser.secUrl = url;
    }, 10);
  }

  private getFormAction(s: string): string {
    let arr = s.match(new RegExp(/action=['|"]([^'|"]*)/));
    if (arr.length > 1) {
      return arr[1];
    }
    return '';
  }

  ionViewCanEnter() {
    this.auth.CheckToken();
  }
}
