import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage
{
  App = window.App;

  tab1Root = 'CreditCardPage';
  tab4Root = 'UcenterPage';

  constructor() { }
}
