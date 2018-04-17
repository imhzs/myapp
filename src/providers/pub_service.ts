import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';
import { Md5 } from "ts-md5/dist/md5";
import { Observable } from 'rxjs/Observable';

import { TypeInfo } from '../UltraCreation/Core/TypeInfo';
import { CredentialHelper } from '../shared/helper/credential-helper';

const API_URL = 'https://h5.5ucardpay.com';

export class TBaseService
{
  // 请求失败
  static REQ_OK: number = 1;

  // 请求成功
  static REQ_FAIL: number = 0;

  // 登录超时
  static SESSION_TIMEOUT = 2;

  // 设置接收后台数据的类型
  private responseType: any = 'json';

  // 请求头
  protected headers: HttpHeaders;

  // 请求参数
  protected params: URLSearchParams;

  constructor(protected http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    this.params = new URLSearchParams();
  }

  // 获取base url
  get BaseUrl() {
    return API_URL;
  }

  // 获取当前用户token
  get getToken() {
    let token = CredentialHelper.getToken();
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
    let responstType = this.responseType;

    this.SetResponseType('json');
    this.setNewParams();
    
    return this.http.post(url, params, {headers: this.headers, responseType: responstType});
  }

  // 设置参数
  public SetParam(key: string, value: any) {
    if (this.params.has(key)) {
      this.params.set(key, value);
    } else {
      this.params.append(key, value);
    }
  }

  // 设置数据返回类型
  public SetResponseType(responstType: any) {
    this.responseType = responstType;
  }

  // 重置请求参数
  protected setNewParams() {
    this.params = new URLSearchParams();
  }

  // 获取图片
  getImage(fileId: string) {
    this.SetParam('fileId', fileId);
    this.SetResponseType('blob');
    return this.Post('kpay/api/image/show');
  }
}
