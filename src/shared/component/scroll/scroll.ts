import {
  Component,
  Injectable,
  Input,
  Output,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
  EventEmitter 
} from '@angular/core';

import BScroll from 'better-scroll';

import { DomChangeDirective } from '../../directive/dom-change.directive';

const DIRECTION_H = 'horizontal';
const DIRECTION_V = 'vertical';

@Component({
  selector: 'app-scroll',
  templateUrl: 'scroll.html',
  providers: [DomChangeDirective]
})
@Injectable()
export class ScrollComponent implements OnInit, OnDestroy
{
  @Input() probeType: number = 1;
  @Input() click: boolean = true;
  @Input() listenScroll: boolean = false;
  @Input() listenBeforeScroll: boolean = false;
  @Input() direction: string = 'vertical';
  @Input() scrollbar: boolean = false;
  @Input() pullDownRefresh: boolean = false;
  @Input() pullUpLoad: boolean = false;
  @Input() startY: number = 0;
  @Input() refreshDelay: number = 20;
  @Input() freeScroll: boolean = false;
  @Input() mouseWheel: boolean = false;

  @Output() beforeScrollStart = new EventEmitter();
  @Output() scroll = new EventEmitter();
  @Output() pullingUp = new EventEmitter();
  @Output() pullingDown = new EventEmitter();

  @ViewChild('wrapperRef') wrapperRef: ElementRef;

  private bScroll: BScroll;

  ngOnInit() {
    let opts = {
      probeType: this.probeType,
      click: this.click,
      scrollY: this.freeScroll || this.direction === DIRECTION_V,
      scrollX: this.freeScroll || this.direction === DIRECTION_H,
      scrollbar: this.scrollbar,
      pullDownRefresh: this.pullDownRefresh,
      pullUpLoad: this.pullUpLoad,
      startY: this.startY,
      freeScroll: this.freeScroll,
      mouseWheel: this.mouseWheel
    };
    this.bScroll = new BScroll(this.wrapperRef.nativeElement, opts);
  }

  ngOnDestroy() {
    this.bScroll.destroy();
  }

  onDomChange(e: any) {
    this.bScroll.refresh();
  }
}