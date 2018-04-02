import { Component, OnInit, Injectable } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { HomeService } from '../../../providers/homeservice';

@IonicPage()
@Component({
  selector: 'page-listofbank',
  templateUrl: 'listofbank.html'
})
@Injectable()
export class ListofbankPage implements OnInit
{
  App = window.App;

  HeadTitle: string = "选择开户银行";

  BankList: Array<any>

  constructor(public Service: HomeService) {
  }

  ngOnInit() {
    this.Service.GetTolBanks().subscribe(data => {
      // this.BankList = data;
    })
  }

  SelectedBank(item) {
   App.ActiveView.dismiss({name: item.bankName, code: item.id});
  }
}
