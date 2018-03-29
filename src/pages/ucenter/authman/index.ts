import { Component, OnInit, Injectable } from '@angular/core';
import { FileService, IDCARD_HAND } from '../../../providers/fileservice';
import { TAuthService } from '../../../providers/auth'

@Component({
    selector: 'page-authman',
    templateUrl: 'index.html'
})
@Injectable()
export class AuthManPage implements OnInit
{
    public previouFile: string = 'assets/imgs/fan.png';

    public canSubmit: boolean = false;

    public headTitle: string = '身份认证';

    private fileKey: string = 'file';

    constructor(private fileService: FileService, private authService: TAuthService) { }

    ngOnInit() { }

    OnClickFile(e: any)
    {
        this.fileService.showAddImage()
        .then((rst: any) => {
            console.log(rst);
            this.previouFile = rst.base64;
            console.log(rst.file);
            this.uploadFile(rst.file);
        })
        .catch (error => {
            console.log(error);
        });
    }

    OnConfirm()
    {
        App.Nav.setPages([App.RootPage.NecInfoPage]);
    }

    async uploadFile(file: any)
    {
        let res = await this.fileService.OcrUpload(this.fileKey, file, IDCARD_HAND);
        if (false !== res) {
            await this.authService.GetUserData();
            this.canSubmit = true;
        }
    }
}