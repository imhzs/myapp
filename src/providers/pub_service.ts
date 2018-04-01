import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Md5 } from "ts-md5/dist/md5";

import { TypeInfo } from '../UltraCreation/Core/TypeInfo';

const API_URL = 'http://39.104.113.132';

export class TBaseService
{
  protected headers: Headers;

  protected params: URLSearchParams;

  constructor(public http: Http) {
    this.headers = new Headers();
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

  get CreateHeader() {
    this.SetHeader('Authorization', this.getToken);
    this.setDefaultContentType();

    return new RequestOptions({headers: this.headers});
  }

  protected setDefaultContentType() {
    if (!this.headers.has('Content-Type')) {
      this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
  }

  // 设置请求头
  SetHeader(name: string, value: string) {
    if (this.headers.has(name)) {
      this.headers.delete(name);
      this.headers.set(name, value);
    } else {
      this.headers.append(name, value);
    }
  }

  Md5T(Password: string) {
    return Md5.hashStr(Password.toString());
  }

  async Get(uri: string){
    let url = API_URL + '/' + uri;
    return await this.http.get(url, this.CreateHeader).toPromise();
  }

  async Post(Uri: string, Data?: any) {
    App.ShowLoading();
    let url = API_URL + '/' + Uri;
    App.HideLoading();
    let params = this.params.toString();
    this.setNewParams();
    return await this.http.post(url, params, this.CreateHeader).toPromise();
  }

  async PostNoLoading(Uri: string, Data?: any) {
    let url = API_URL + '/' + Uri;
    let params = this.params.toString();
    console.log(params);
    this.setNewParams();
    return await this.http.post(url, params, this.CreateHeader).toPromise();
  }

  public SetParam(key: string, value: any) {
    if (this.params.has(key)) {
      this.params.set(key, value);
    } else {
      this.params.append(key, value);
    }
  }

  protected setNewParams() {
    this.params = new URLSearchParams();
  }
}
