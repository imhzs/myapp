import { TypeInfo } from '../../UltraCreation/Core/TypeInfo';

export class CheckoutHelper
{
  App: any = <any>window.App;

  // 渠道数据
  str: string;

  constructor() {
    if (!String.prototype.trim) {
      String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
      };
    }
  }

  public parse(str: string) {
    this.str = str;
    if (this.isUrl(str)) {
      App.Nav.push(App.pages.finalPayPage, {
        innerHtml: '',
        browser: {
          url: this.str
        }
      });
    } else if (this.isForm()) {
      App.Nav.push(App.pages.finalPayPage, {innerHtml: this.str});
    } else if (this.isRedirect()) {
      App.Nav.push(App.pages.finalPayPage, {
        innerHtml: '',
        browser: {
          url: this.getRedirectUrl()
        }
      });
    } else if (this.isHtml()) {
      App.Nav.push(App.pages.finalPayPage, {innerHtml: this.str});
    } else {
      try {
        let resp = JSON.parse(this.str);
        if (resp.ErrorMsg) {
          App.ShowError(resp.ErrorMsg);
        } else {
          App.ShowError('跳转支付失败，请稍后再试');
        }
      } catch (error) {
        App.ShowError('跳转支付失败，请稍后再试'); 
      }
    }
  }

  public getRedirectUrl() {
    let reg = /<script[^>]*>([\s\S]*)location.href=["|']([\s\S]*)<\/script/ig;
    let arr = reg.exec(this.str);
    if (TypeInfo.IsArrayLike(arr) && arr.length > 2) {
      let url = arr[2].trim();
      return url.substr(0, url.length - 1);
    }
    return null;
  }

  public isRedirect() {
    return this.str.indexOf('location.href') > -1;
  }

  public isHtml() {
    return this.str.indexOf('</body>') > -1;
  }

  public isForm() {
    return this.str.indexOf('</body>') > -1 && this.str.indexOf('</form>') > -1;
  }

  // 是否为合法的url
  public isUrl(url) {
    return /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/i.test(url);
  }
}