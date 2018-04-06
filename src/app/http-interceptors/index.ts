/* "Barrel" of Http Interceptors */
// import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NoopInterceptor } from './noop-interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];

// @NgModule({
//   providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
//   ]
// })
// export class InterceptorModule { }
