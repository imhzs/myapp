import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Storage } from '@ionic/storage';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Authorization');
    let dupReq: HttpRequest = req;
    if (!req.headers.has('Authorization')) {
      let token = localStorage.getItem('token');
      dupReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
              });
    }
    let resp = next.handle(dupReq);
    console.log(resp.take(1));
    return resp;
  }
}
