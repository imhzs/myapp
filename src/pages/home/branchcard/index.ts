import { Component, OnInit, Injectable } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { HomeService } from '../../../providers/homeservice';
const _ = require('lodash');

@Component({
  selector: 'page-branchcard',
  templateUrl: 'index.html'
})
@Injectable()
export class BranchcardPage implements OnInit
{
  App = window.App;

  private debounced: any;

  constructor(public navParams: NavParams, public Service: HomeService ) {
  }

  ngOnInit() {
    this.BankName = this.navParams.get('Bank');
    this.BankCode = this.navParams.get('Code');
    this.Service.GetBranchBanks(this.BankName).then(res => {
      this.BranchList = res;
    });
    this.debounced = _.debounce(this.GetKey, 500);
  }

  async GetKey() {
    let params = this.BankName + ',' + this.KeyWord;
    this.Service.GetBranchBanks(params).then(res => {
      this.BranchList = res;
    })
  }

  SearchBank() {
    this.debounced();
  }

  SelectedBranch(item) {
    App.ActiveView.dismiss({name: item.bankName, bankCode: item.bankCode});
  }

  HeadTitle: string = "选择开户支行";
  BankName: string;
  BankCode: string;
  BranchList: Array<any> = [];
  KeyWord: string;
}
