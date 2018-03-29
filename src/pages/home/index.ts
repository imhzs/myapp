import { Component, ViewChild, ElementRef, NgZone, OnInit } from '@angular/core';
import { Content } from 'ionic-angular';
import { HomeService } from '../../providers/homeservice';

@Component({
  selector: 'page-home',
  templateUrl: 'index.html'
})
export class HomePage implements OnInit
{
  App = window.App;

  @ViewChild(Content) content: Content;

  constructor(public zone: NgZone, public Service: HomeService) {
    
  }

  ngOnInit()
  {
    
  }
}
