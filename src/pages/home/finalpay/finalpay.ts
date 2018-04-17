import { Component, OnInit, ViewChild, ElementRef, Injectable } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { setTimeout, clearTimeout } from 'timers';

import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';

@IonicPage({
  segment: 'finalpay'
})
@Component({
  selector: 'page-finalpay',
  templateUrl: 'finalpay.html',
})
@Injectable()
export class FinalpayPage implements OnInit
{
  // 页面标题
  headTitle :string = '银联支付';

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

  // 表单html
  htmltext: SafeHtml;

  // 表单url
  formAction: string = '';

  // iframe宽度
  iframeWidth: number;

  // iframe高度
  iframeHeight: number;

  @ViewChild('paymentForm') paymentForm: ElementRef;
  @ViewChild('progressRef') progressRef: ElementRef;
  @ViewChild('headerRef') headerRef: ElementRef;
  @ViewChild('iframeRef') iframeRef: ElementRef;

  // 分享控制的配置
  shareConfig: any = {
    isShow: false
  };

  constructor(public navParams: NavParams, private sanitizer: DomSanitizer) {
    if (!this.navParams.get('innerHtml') && !this.navParams.get('browser')) {
      App.Nav.push(App.pages.creditCardPage);
    }
  }

  ngOnInit() {
    let headerHeight = parseInt(window.getComputedStyle(this.headerRef.nativeElement).height) + 10;
    let progressHeight = parseInt(window.getComputedStyle(this.progressRef.nativeElement).height) + 10;
    this.iframeWidth = document.body.offsetWidth;
    this.iframeHeight = document.body.offsetHeight - (progressHeight + headerHeight);

    let bodyText = this.navParams.get('innerHtml').toString();

    if (bodyText.indexOf('</form>') == -1 && bodyText.indexOf('</body>') > -1) {
      this.flag = false;
      let reg = /<body[^>]*>([\s\S]*)<\/body>/ig;
      let arr = reg.exec(bodyText);

      if (TypeInfo.IsArrayLike(arr)) {
        this.this_html = this.sanitizer.bypassSecurityTrustHtml(arr[1]);
      }
    } else if(bodyText.indexOf('</form>') > -1) {
      this.flag = true;
      let reg = /<form[^>]*>([\s\S]*)<\/form>/ig;
      let arr = reg.exec(bodyText);
      if (TypeInfo.IsArrayLike(arr)) {
        let html = arr[0].replace('<form', '<form target="targetIframe" ');
        this.formAction = this.getFormAction(arr[0]);
        this.htmltext = this.sanitizer.bypassSecurityTrustHtml(html);
      }
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
    this.submitForm();
    if(!this.browser.proObj) {
      this.browser.proObj = document.getElementById('progress');
    }

    this.onprogress();
  }

  // 提交表单
  private submitForm() {
    if (this.flag && TypeInfo.Assigned(this.htmltext)) {
      this.paymentForm.nativeElement.submit();
      // document.querySelector('form').submit();
    }
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

  // 获取表单url
  private getFormAction(s: string): string {
    let reg = /action=([^\s]*)/ig;
    let arr = reg.exec(s);
    if (TypeInfo.IsArrayLike(arr) && (arr.length > 1)) {
      return arr[1].replace(/['|"]*/ig, '');
    }
    return '';
  }

  ionViewCanEnter() {
    return App.authenticated;
  }
}
