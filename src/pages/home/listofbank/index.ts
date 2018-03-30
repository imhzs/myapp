import { Component, OnInit, Injectable } from '@angular/core';
import { HomeService } from '../../../providers/homeservice';

@Component({
  selector: 'page-listofbank',
  templateUrl: 'index.html'
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
    this.Service.GetTolBanks().then(res => {
      this.BankList = res;
    })
  }

  SelectedBank(item) {
   App.ActiveView.dismiss({name: item.bankName, code: item.id});
  }
}
