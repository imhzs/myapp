import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions } from '@ionic-native/file-transfer';
import lrz from 'lrz';

import { TBaseService } from '../providers/pub_service';

// 附件类型-手持身份证
export const IDCARD_HAND = 'idcard_hand';

// 附件类型-银行卡正面
export const BANKCARD_FRONT = 'bankcard_front';

// 附件类型-银行卡反面
export const BANKCARD_BACK = 'bankcard_back';

@Injectable()
export class FileService extends TBaseService
{
  protected params: any;

  protected targetWidth: number = 532;

  protected targetHeight: number = 292;

  constructor(public http: Http, private camera: Camera, private fileTransfer: FileTransfer)
  {
    super(http);
    this.params = new FormData();
  }

  // 附件上传
  async OcrUpload(fileKey: string, file: any, cType: string)
  {
    return await this.PostFile('kpay/api/ocr/upload', fileKey, file, {'type': cType});
  }

   // 身份认证
   async IdentityAuth(file: any, cType: string)
   {
      return await this.PostFile('kpay/api/ocr/idcard', 'file', file, {'type': cType});
   }

   async PostFiles(uri: string)
   {
      let resp;
      resp = await this.PostByXMLHttpReq(uri).then((resp) => resp);
      if (resp.code === 1) {
        return resp.data;
      }
      App.ShowError(resp.msg);
      return false;
   }

   async PostFile(uri: string, fileKey: string, file: any, params?: any)
   {
      for (let k in params) {
        this.SetParam(k, params[k]);
      }
      this.SetParam(fileKey, file);
      let resp;

      if (window['cordova']) {
          resp = await this.PostByFileTransfer(uri, fileKey, file, params)
          .then((resp) => resp)
          .catch(error => {
            App.ShowToast(error);
          });
      } else {
        resp = await this.PostByXMLHttpReq(uri, fileKey, file)
        .then((resp) => resp)
        .catch(error => {
          App.ShowToast(error);
        });
      }

      if (resp.code === 1) {
       return resp.data;
      }
      App.ShowError(resp.msg);
      return false;
   }

  public showAddImage() {
    return new Promise((resolve, reject) => {
      if (!window['cordova']) {
        let input = document.createElement('input');
        input.type = 'file';
        input.accept = "image/png,image/jpeg,image/jpg,image/x-png";
        input.click();
        input.onchange = () => {
            console.log(input.files[0]);
            App.ShowLoading('处理中');
            lrz(input.files[0], {
                quality: 0.5,
                width: this.targetWidth,
                height: this.targetHeight
            })
            .then((rst) => {
                // 处理成功会执行
                console.log(rst);
                let file = this.dataURLtoFile(rst.base64, input.files[0].name);
                let result = {
                    'file': file,
                    'base64': rst.base64,
                    'blob': window.URL.createObjectURL(file)
                };
                resolve(result);
            })
            .catch((err) => {
                // 处理失败会执行
                console.log('LRZ: Compress image failed.');
                console.log(err);
            })
            .always(() => {
                // 不管是成功失败，都会执行
                App.HideLoading();
            });
        }
      } else {
          new Promise((resolve, reject) => {
            let actionSheetConfig = {
                title: '添加图片',
                buttons: [
                  {
                    text: '相册',
                    handler: () => {
                      resolve(this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                  },
                  {
                    text: '相机',
                    handler: () => {
                      resolve(this.camera.PictureSourceType.CAMERA);
                    }
                  },
                  {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        reject();
                    }
                  }
                ]
            };
            App.ShowActionSheet(actionSheetConfig);
          }).then(sourceType => {
            if (!window['cordova']) {
              return;
            }

            let options: CameraOptions = {
                quality: 50,
                sourceType: sourceType as number,
                saveToPhotoAlbum: false,
                correctOrientation: true,
                targetWidth: this.targetWidth,
                targetHeight: this.targetHeight
            };
            this.camera.getPicture(options).then((imageData) => {
                if (imageData.indexOf('?') > -1) {
                    let arr = imageData.match(new RegExp(/[^?]+/, 'ig'));
                    if (arr.length > 0) {
                      imageData = arr[0];
                    }
                }

                let result = {
                    'file': imageData,
                    'base64': imageData,
                    'blob': imageData
                };
                resolve(result);
            });
        }).catch((error) => {
            console.log('Camera failed.');
            App.ShowToast('获取图片失败');
            reject(error);
        });
      }
    });
  }

  dataURLtoBlob(dataurl) {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while(n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {
      type: mime
    });
  }

  dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(',');
    let mime = arr[0].match(/:(.*?);/)[1];
    let bstr = atob(arr[1]);
    let n = bstr.length
    let u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {'type': mime});
  }

  PostByFileTransfer(uri: string, fileKey: string, file: any, params?: any)
  {
    return new Promise((resolve, reject) => {
      let BaseUrl = this.BaseUrl;
      let url = `${BaseUrl}/${uri}`;
      
      if (window['cordova']) {
        let options: FileUploadOptions = {
            fileKey: fileKey,
            fileName: file,
            headers: {
              'Authorization': this.getToken
            }
        };

        if (params) {
          options.params = params;
        }

        const fileTransfer = this.fileTransfer.create();
        // url = 'http://agent.hzspro.com/test.php';

        fileTransfer.upload(file, url, options)
        .then(data => {
          resolve(JSON.parse(data.response));
        })
        .catch((error) => {
          App.ShowToast('上传失败');
          reject(error);
        });
      }
    });
  }

  async PostByXMLHttpReq(uri: string, fileKey?: string, file?: any)
  {
    return new Promise((resolve, reject) => {
      let BaseUrl = this.BaseUrl;
      let url = `${BaseUrl}/${uri}`;
      
      if (fileKey && file) {
        this.SetParam(fileKey, file);
      }

      if (window.fetch) {
        let opts: RequestInit = {
            method: 'POST',
            headers: {
              'Authorization': this.getToken
            },
            body: this.params
        };
        fetch(url, opts)
        .then(resp => {
          App.HideLoading();
          resolve(resp.json());
        })
        .catch (error => {
          App.HideLoading();
          reject(error);
        });
      } else {
        let xhr: XMLHttpRequest = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(JSON.parse(xhr.response));
            } else {
              reject(xhr);
            }
          }
        };

        xhr.onloadend = () => {
          App.HideLoading();
        };

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Authorization', this.getToken);
        xhr.send(this.params);
      }
    });
  }
}

