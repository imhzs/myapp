import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './index.html'
})
export class PageToolbarComponent
{
  App: any = <any>window.App;

  constructor() {}

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

  ToUCenter() {
    location.href = '/#/ucenter';
  }

  Back() {
    history.go(-1);
  }
}