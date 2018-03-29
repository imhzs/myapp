import { Component, OnInit, Injectable } from '@angular/core';
import { HomeService } from '../../../providers/homeservice';
import { FileService } from '../../../providers/fileservice';

@Component({
    selector: 'page-authcard',
    templateUrl: 'index.html'
})
@Injectable()
export class AuthCardPage implements OnInit {

    private cardInfo = {
        idno: '',
        name: ''
    };

    public headTitle: string = '身份认证';

    public canSubmit: boolean = false;

    private frontDefault: string = 'assets/imgs/zheng.png';

    private backDefault: string = 'assets/imgs/fan.png';

    private cards: any = {'front': this.frontDefault, 'back': this.backDefault};

    public cardFront: string = 'idcard_front';

    public cardBack: string = 'idcard_back';

    constructor(private homeService: HomeService, private fileService: FileService) { }

    ngOnInit() { }

    onClickFile(cardType: string, e: any) {
        console.log(cardType);
        this.fileService.showAddImage().then((rst: any) => {
            console.log(rst);
            let cardName = (cardType).replace('idcard_', '');
            this.cards[cardName] = rst.base64;
            console.log(rst.file);
            this.ouploadFile(cardType, rst.file);
            this.setCanSubmit();
        }).catch (error => {
            console.log(error);
        });
    }

    // 设置按钮
    setCanSubmit() {
        if (this.cards.front != this.frontDefault && this.cards.back != this.backDefault) {
            this.canSubmit = true;
        } else {
            this.canSubmit = false;
        }
    }

    async ouploadFile(cType: string, file: any)
    {
        let res = await this.fileService.IdentityAuth(file, cType);
        if (false === res) {
            App.ShowToast('身份证识别失败');
        }
        if (false !== res && cType == this.cardFront) {
            this.cardInfo = res;
        }
    }

    // 提交认证
    onSubmit(e) {
        if (JSON.stringify(this.cardInfo) === '{}') {
            return;
        }
        this.showCardInfo();
    }

    showCardInfo()
    {
        let alertOption = {
            title: '确认身份信息',
            // message: this.cardInfo.idno,
            inputs: [
                {
                    name: 'idcard',
                    value: this.cardInfo.idno,
                    placeholder: '请输入身份证号'
                },
                {
                    name: 'username',
                    value: this.cardInfo.name,
                    placeholder: '请输入姓名'
                }
            ],
            buttons: [
                {
                    text: '取消'
                },
                {
                    text: '确定',
                    handler: data => {
                        this.cardInfo.name = data.username;
                        this.cardInfo.idno = data.idcard;
                        this.confirmCarInfo();
                    }
                }
            ]
        }

        App.ShowAlert(alertOption).then((modal) =>
            modal.onDidDismiss(() => {})
        );
    }

    async confirmCarInfo()
    {
        let res = await this.homeService.VerifyId(this.cardInfo.idno, this.cardInfo.name);
        if (res) {
            App.Nav.setPages([App.RootPage.AuthManPage]);
        }
    }
}