import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-myinterest',
  templateUrl: 'index.html'
})
export class MyInterestPage implements OnInit {
  ngOnInit () {

  }

  App = window.App;
  public headTitle: string='我的权益';
}