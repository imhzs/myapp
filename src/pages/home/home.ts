import { Component, ViewChild, NgZone, OnInit, Injectable } from '@angular/core';
import { Content, IonicPage, NavController } from 'ionic-angular';

import { HomeService } from '../../providers/homeservice';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()
export class HomePage implements OnInit
{
  App = window.App;

  @ViewChild(Content) content: Content;

  constructor(public zone: NgZone, public Service: HomeService, public nav: NavController) {
  }

  ngOnInit() {
  	// console.log(App.UserInfo);
  	// console.log(App.Nav.push('SetPasswordPage'));
  }
}