import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { AppVersion } from '@ionic-native/app-version';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
import { File } from '@ionic-native/file';
import { Device } from '@ionic-native/device';

@Injectable()
export class CheckAppUpdate
{
  protected curVersion: number = 0;

  protected version: number;

  protected apkUrl: string;

  private xml: string;

  private file: File;

  private fileOpener: FileOpener;

  App = window.App;

  constructor (private http: Http, private appVersion: AppVersion, private fileTransfer: FileTransfer, private device: Device) {
    this.file = new File();
    this.fileOpener = new FileOpener();
  }

  // 检查更新
  appUpdate() {
    if (!App.IsAndroid) {
      return;
    }
    this.setCurVersion();
    this.setUpdateInfo().then(() => {
      if (this.hasNewVersion()) {
        let opts = {
              title: '版本升级',
              message: '发现新版本，是否升级？',
              buttons: [
                {
                  text: '取消',
                  role: 'cancel',
                  handler: () => {
                    console.log('已取消升级');
                  }
                },
                {
                  text: '确定',
                  handler: () => {
                    this.download();
                  }
                }
              ]
          };
        App.ShowAlert(opts);
      }
    })
    .catch(e => {
      console.log(e);
    });
  }

  // 获取版本配置信息
  setUpdateInfo() {
    return new Promise((resolve, reject) => {
      this.http.get('http://58mpay.com/pay/update.xml').toPromise()
      .then(resp => {
        console.log(resp.text());
        this.xml = resp.text();
        this.setVersion(parseInt(this.getFromXml('version')));
        this.setApkUrl(this.getFromXml('url'));
        resolve();
      })
      .catch(error => {
        reject(error);
        console.log(error);
      });
    });
  }

  // 设置新版本
  setVersion(version: number) {
    this.version = version;
  }

  // apk下载路径
  setApkUrl(url: string) {
    this.apkUrl = url;
  }

  // 从xml中获取值
  getFromXml(key: string): string {
    let arr = this.xml.match('<(' + key + ')>([^<>]+)<\/' + key + '>');
    if (arr.length > 2) {
      return arr[2];
    }
    return '';
  }

  // 当前版本
  setCurVersion() {
    this.appVersion.getVersionCode()
        .then(no => {
          this.curVersion = parseInt(no);
        })
        .catch(e => {
          console.log(e);
        });
  }

  // 是否有版本更新
  hasNewVersion(): boolean {
    return this.curVersion > 0 && (this.curVersion < this.version);
  }

  // 下载apk
  download() {
    let apkName = '58pay.apk';
    let fileTransfer = this.fileTransfer.create();
    this.showProcess();

    fileTransfer.onProgress((progress) => {
      let downloadProgress = (progress.loaded / progress.total) * 100;
      this.showProcess();
      if (downloadProgress > 99) {
        App.HideLoading();
      }
    });

    this.file.createFile(this.getStoragePath, apkName, true).then(fileEntry => {
      fileTransfer.download(this.apkUrl, fileEntry.toInternalURL(), true).then((entry) => {
        this.fileOpener.open(entry.toInternalURL(), 'application/vnd.android.package-archive')
        .then((entry) => {
          console.log('打开成功');
        })
        .catch(e => {
          console.log('打开文件失败');
          console.log(e);
        });;

        App.HideLoading();
        console.log('download complete: ' + entry.toURL());
      })
      .catch((e) => {
        console.log(e);
      });
    })
    .catch(e => {
      console.log('创建文件失败');
      console.log(e);
    });
  }

  // 显示下载进度条
  showProcess() {
    App.ShowLoading({ content: '下载中...' });
  }

  get getStoragePath(): string {
    if (App.IsAndroid && this.device.version > '7') {
      return this.file.dataDirectory;
    }
    return this.file.externalDataDirectory;
  }
}