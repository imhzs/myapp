import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({ selector: 'app-toolbar', templateUrl: './index.html' })
export class PageToolbarComponent
{
  App: any = <any>window.App;

  constructor(private navCtrl: NavController) {}

  @Input() CoverColor: Boolean = false;
  @Input() HasBack: Boolean;
  @Input() Title: string;
  @Input() TitleAlign: string = 'center';
  @Input() AppIcon: boolean = false;
  @Input() BtnIcon: string;
  @Input() BtnText: string;
  @Output() CircleUser: boolean = true;
  @Output() BtnTextEvent = new EventEmitter();
  @Output() BtnIconEvent = new EventEmitter();
  @Output() UCenter = this.ToUCenter;

  ToUCenter() {
    this.navCtrl.push('UcenterPage');
  }
}