import { Component, Injectable } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-confirminfo',
  templateUrl: 'index.html'
})
@Injectable()
export class ConfirminfoPage
{
  App = window.App;

  CardInfo: string;

  Amount: string;

  CardCode: string;

  Staturs: boolean;

  constructor(public navParams: NavParams) {
    this.CardInfo = this.navParams.get('InCard');
    this.Amount = this.navParams.get('FinalAmount');
    this.CardCode = this.navParams.get('CardCode');
  }
}
