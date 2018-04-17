import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-toolbar',
  templateUrl: './index.html'
})
export class PageToolbarComponent
{
  App: any = <any>window.App;

  constructor(public location: Location) {}

  @Input() CoverColor: Boolean = false;
  @Input() HasBack: Boolean = false;
  @Input() Title: string;
  @Input() TitleAlign: string = 'center';
  @Input() AppIcon: boolean = false;
  @Input() BtnIcon: string;
  @Input() BtnText: string;

  @Output() CircleUser: boolean = true;
  @Output() BtnTextEvent = new EventEmitter();
  @Output() BtnIconEvent = new EventEmitter();

  ToUCenter() {
    App.Nav.push(App.pages.ucenterPage);
  }

  Back() {
    if (App.Nav.length() > 1) {
      App.Nav.pop();
    } else {
      this.location.back();
      // history.go(-1);
    }
  }
}