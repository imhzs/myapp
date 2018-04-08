import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/Observable/ErrorObservable';
import { catchError, tap } from 'rxjs/operators';

import { TBaseService } from '../../providers/pub_service';
import { TypeInfo } from '../../UltraCreation/Core/TypeInfo';
import { CredentialHelper } from '../../shared/helper/credential-helper';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor
{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let jwtReq: HttpRequest<any> = req;
    if (!req.headers.has('Authorization')) {
      let token = CredentialHelper.getToken();
      jwtReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${token}`) });
    }

    return next.handle(jwtReq).pipe(catchError(this.handleError)).pipe(tap((event) => {
      if (event instanceof HttpResponse) {
        if (event.body.code == TBaseService.SESSION_TIMEOUT) {
          let mobile = CredentialHelper.getMobile();
          let secret = CredentialHelper.getSecret();
          if (TypeInfo.Assigned(mobile) && TypeInfo.Assigned(secret)) {
            location.href = `/#/thirdLogin/${mobile}/${secret}`;
          } else {
            location.href = '/#/login';
          }

          return new ErrorObservable('登录超时');
        } else if (event.body.code == TBaseService.REQ_FAIL) {
          if (TypeInfo.Assigned(event.body.msg)) {
            App.ShowError(event.body.msg);
          }
          return new ErrorObservable('请求失败');
        }
      }
    }));
  }

  // 错误处理
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return new ErrorObservable('Something bad happened; please try again later.');
  }
}
