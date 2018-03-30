import { Component, ViewChild, NgZone, OnInit, Injectable } from '@angular/core';
import { Content } from 'ionic-angular';
import { HomeService } from '../../providers/homeservice';

@Component({
  selector: 'page-home',
  templateUrl: 'index.html'
})
@Injectable()
export class HomePage implements OnInit
{
  App = window.App;

  @ViewChild(Content) content: Content;

  constructor(public zone: NgZone, public Service: HomeService) {
  }

  ngOnInit() {
  }
}
