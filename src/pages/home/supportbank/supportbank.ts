import { Component, Injectable } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { HomeService } from '../../../providers/homeservice';
import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';
import { ChannelModel }  from '../../../models/channel-model';

@IonicPage()
@Component({
  selector: 'page-supportbank',
  templateUrl: './supportbank.html'
})
@Injectable()
export class SupportBankPage
{
  App: any = window.App;

  banks: Array<any> = [];

  hasScoreBanks: Array<any> = [];

  noScoreBanks: Array<any> = [];

  HeadTitle: string = '收款支持银行以及银行限额说明';

  channelType: ChannelModel = {
    hasScore: 1,
    noScore: 0
  }

  constructor(private service: HomeService) {
    this.initData();
  }

  async initData()
  {
    this.service.SupportBanks().subscribe(
      resp => {
        if (resp.code === HomeService.REQ_FAIL) {
          return;
        }
        resp.data.forEach(v => {
          if (TypeInfo.Assigned(v)) {
            if (parseInt(v.hasScore) === this.channelType.hasScore) {
              this.hasScoreBanks.push(v);
            } else if (parseInt(v.hasScore) === this.channelType.noScore) {
              this.noScoreBanks.push(v);
            }
          }
        });
      }
    );
  }
}