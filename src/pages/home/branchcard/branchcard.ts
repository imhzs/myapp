import { Component, OnInit, Injectable } from '@angular/core';
import { NavParams, IonicPage } from 'ionic-angular';

const _ = require('lodash');

import { BranchBankModel } from '../../../models/branch-bank-model';
import { HomeService } from '../../../providers/homeservice';
import { TAuthService } from '../../../providers/auth';

@IonicPage()
@Component({
  selector: 'page-branchcard',
  templateUrl: 'branchcard.html'
})
@Injectable()
export class BranchcardPage implements OnInit
{
  App = window.App;

  HeadTitle: string = "选择开户支行";

  BankName: string;

  BankCode: string;

  BranchList: Array<BranchBankModel> = new Array<BranchBankModel>();

  KeyWord: string;

  private debounced: any;

  constructor(public navParams: NavParams, public Service: HomeService, private auth: TAuthService) {
  }

  ngOnInit() {
    this.BankName = this.navParams.get('Bank');
    this.BankCode = this.navParams.get('Code');
    this.Service.GetBranchBanks(this.BankName).subscribe(
      data => {
        this.BranchList = data.data;
      }
    );
    this.debounced = _.debounce(this.GetKey, 500);
  }

  GetKey() {
    let params = this.BankName + ',' + this.KeyWord;
    this.Service.GetBranchBanks(params).subscribe(
      data => {
        this.BranchList = data.data;
      }
    )
  }

  SearchBank() {
    this.debounced();
  }

  SelectedBranch(item) {
    App.ActiveView.dismiss({name: item.bankName, bankCode: item.bankCode});
  }

  ionViewCanEnter() {
    this.auth.CheckToken();
  }
}
