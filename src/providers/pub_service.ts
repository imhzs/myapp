import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';
import { Md5 } from "ts-md5/dist/md5";
import { Observable } from 'rxjs/Observable';

import { TypeInfo } from '../UltraCreation/Core/TypeInfo';

const API_URL = 'http://39.104.113.132';

export class TBaseService
{
  // 请求失败
  static REQ_OK: number = 1;

  // 请求成功
  static REQ_FAIL: number = 0;

  // 登录超时
  static SESSION_TIMEOUT = 2;

  protected headers: HttpHeaders;

  protected params: URLSearchParams;

  constructor(protected http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    this.params = new URLSearchParams();
  }

  get BaseUrl() {
    return API_URL;
  }

  get getToken() {
    let token = localStorage.getItem('token');
    if (TypeInfo.Assigned(token)) {
      return `Bearer ${token}`;
    }
    return '';
  }

  // 设置请求头
  SetHeader(name: string, value: string) {
    this.headers.set(name, value);
  }

  // md5加密
  Md5T(Password: string) {
    return Md5.hashStr(Password.toString());
  }

  // get请求
  async Get(uri: string){
    let url = API_URL + '/' + uri;
    return await this.http.get(url, {headers: this.headers});
  }

  // 发送POST请求
  Post(Uri: string, Data?: any): Observable<any> {
    let url = `${API_URL}/${Uri}`;
    let params = this.params.toString();
    this.setNewParams();
    return this.http.post(url, params, {headers: this.headers});
  }

  async PostNoLoading(Uri: string, Data?: any) {
    let url = API_URL + '/' + Uri;
    let params = this.params.toString();
    this.setNewParams();
    return await this.http.post(url, params, {headers: this.headers});
  }

  // 设置参数
  public SetParam(key: string, value: any) {
    if (this.params.has(key)) {
      this.params.set(key, value);
    } else {
      this.params.append(key, value);
    }
  }

  // 重置请求参数
  protected setNewParams() {
    this.params = new URLSearchParams();
  }
}
