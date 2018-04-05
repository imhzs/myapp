import { Component, ViewChild, Injectable } from '@angular/core';
import { Content, IonicPage } from 'ionic-angular';

@IonicPage({
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@Injectable()
export class HomePage
{
  App: any = <any>window.App;

  @ViewChild(Content) content: Content;

  constructor() {
  }
}
