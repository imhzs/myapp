import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/Observable/ErrorObservable';
import { catchError, tap, timeout } from 'rxjs/operators';
import { TimeoutError } from 'rxjs/util/TimeoutError';

import { TBaseService } from '../../providers/pub_service';
import { TypeInfo } from '../../UltraCreation/Core/TypeInfo';
import { CredentialHelper } from '../../shared/helper/credential-helper';
import { LoadingHleper } from '../../shared/helper/loading-helper';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor
{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    LoadingHleper.showLoading();
    let jwtReq: HttpRequest<any> = req;
    if (!req.headers.has('Authorization')) {
      let token = CredentialHelper.getToken();
      jwtReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });
    }

    return next.handle(jwtReq).pipe(timeout(15000)).pipe(catchError(this.handleError)).pipe(tap((event) => {
      if (event instanceof HttpResponse) {
        LoadingHleper.hideLoading();
        if (event.body.code == TBaseService.SESSION_TIMEOUT) {
          let mobile = CredentialHelper.getMobile();
          let secret = CredentialHelper.getSecret();
          CredentialHelper.removeToken();
          
          if (TypeInfo.Assigned(mobile) && TypeInfo.Assigned(secret)) {
            App.Nav.setPages([{page: App.pages.tabsPage}, {page: App.pages.thirdLoginPage, params: {mobile: mobile, key: secret}}]);
          } else {
            App.Nav.setPages([{page: App.pages.tabsPage}, {page: App.pages.loginPage}]);
          }

          return new ErrorObservable('登录超时');
        } else if (event.body.code == TBaseService.REQ_FAIL) {
          if (TypeInfo.Assigned(event.body.msg)) {
            App.ShowError(event.body.msg);
          }
          return new ErrorObservable('请求成功，返回失败值');
        }
      }
    })).pipe(catchError(this.handleError));
  }

  // 错误处理
  private handleError(error: HttpErrorResponse) {
    if (error instanceof TimeoutError) {
      App.ShowError('请求超时，请稍后重新');
      console.log(`Request timeout: ${error.message}`);
    } else if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    LoadingHleper.hideLoading();
    return new ErrorObservable('Something bad happened; please try again later.');
  }
}
