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

import { TypeInfo } from '../../../UltraCreation/Core/TypeInfo';

const DIRECTION_H = 'horizontal';
const DIRECTION_V = 'vertical';

@Component({
  selector: 'app-scroll',
  templateUrl: 'scroll.html'
})
@Injectable()
export class ScrollComponent implements OnInit, OnDestroy
{
  @Input() probeType: number = 3;
  @Input() click: boolean = true;
  @Input() listenScroll: boolean = false;
  @Input() listenBeforeScroll: boolean = false;
  @Input() direction: string = 'vertical';
  @Input() scrollbar: boolean = false;
  @Input() pullDownRefresh: DownUpRefresh;
  @Input() pullUpLoad: DownUpRefresh;
  @Input() startY: number = 0;
  @Input() refreshDelay: number = 20;
  @Input() freeScroll: boolean = false;
  @Input() mouseWheel: boolean = false;
  @Input() listenScrollEnd: boolean = false;
  @Input() pullUpTxt: string = '5U卡贝';
  @Input() pullDownText: string = '5U卡贝';

  @Output() beforeScrollStart = new EventEmitter();
  @Output() scroll = new EventEmitter();
  @Output() pullingUp = new EventEmitter();
  @Output() pullingDown = new EventEmitter();
  @Output() scrollEnd = new EventEmitter();

  // 整体内容区
  @ViewChild('wrapperRef') wrapperRef: ElementRef;

  // 滚动区域
  @ViewChild('listContentRef') listContentRef: ElementRef;

  // 下拉刷新
  @ViewChild('pulldownRef') pulldownRef: ElementRef;

  // 上拉刷新
  @ViewChild('pullupRef') pullupRef: ElementRef;

  private bScroll: BScroll;
  beforePullDown: boolean = true;
  isRebounding: boolean = false;
  isPullingDown: boolean = false;
  isPullUpLoad: boolean = false;
  pullUpDirty: boolean = true;
  pullDownStyle: string = '';
  bubbleY: number = 0;
  pullDownInitTop: number = -50;
  pullUpLoadThreshold: number = 0;
  pullUpStyle: string = '';

  ngOnInit() {
    setTimeout(() => {
      this.initScroll()
    }, 20);
  }

  public ngOnDestroy() {
    this.bScroll.destroy();
  }
  
  public initScroll() {
    if (!this.wrapperRef.nativeElement) {
      return;
    }
    this.setPullUpTxt();
    this.setPullDownTxt();
    this.setPullUpLoadThreshold();
    this.setPullDownRefresh();
    if (this.listContentRef.nativeElement && (this.pullDownRefresh || this.pullUpLoad)) {
      this.listContentRef.nativeElement.style.minHeight = `${this.getRect(this.wrapperRef.nativeElement).height + 1}px`;
    }

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

    this.computePullUpBottom();
    this.computePullDownTop();

    if (this.listenScroll) {
      this.bScroll.on('scroll', (pos) => {
        this.scroll.emit(pos);
      })
    }

    if (this.listenBeforeScroll) {
      this.bScroll.on('beforeScrollStart', () => {
        this.beforeScrollStart.emit();
      })
    }

    if (this.pullDownRefresh) {
      this.initPullDownRefresh();
    }

    if (this.pullUpLoad) {
      this.initPullUpLoad();
    }

    if (this.listenScrollEnd) {
      this.bScroll.on('scrollEnd', (pos) => {
        this.scrollEnd.emit(pos);
      });
    }
  }

  public disable() {
    if (this.bScroll) {
      this.bScroll.disable();
    }
  }

  public enable() {
    if (this.bScroll) {
      this.bScroll.enable();
    }
  }

  public scrollTo() {
    if (this.bScroll) {
      this.bScroll.scrollTo.apply(this.scroll, arguments);
    }
  }

  public scrollToElement() {
    if (this.bScroll) {
      this.bScroll.scrollToElement.apply(this.scroll, arguments);
    }
  }

  public refresh() {
    if (this.bScroll) {
      this.bScroll.refresh();
    }
  }

  public forceUpdate(dirty: boolean = false) {
    if (this.pullDownRefresh && this.isPullingDown) {
      this.isPullingDown = false;
      this.reboundPullDown().then(() => {
        this.afterPullDown();
      })
    } else if (this.pullUpLoad && this.isPullUpLoad) {
      this.isPullUpLoad = false;
      this.bScroll.finishPullUp();
      this.pullUpDirty = dirty;
      this.setPullUpTxt();
      this.refresh();
    } else {
      this.refresh();
    }
  }

  // 设置上拉加载文本
  private setPullUpTxt() {
    let moreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more || this.pullUpTxt;
    let noMoreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore || '无更多数据';
    this.pullUpTxt = this.pullUpDirty ? moreTxt : noMoreTxt;
  }

  // 设置下拉更新文本
  private setPullDownTxt() {
    if (TypeInfo.IsObject(this.pullDownRefresh) && TypeInfo.IsObject(this.pullDownRefresh.txt) && TypeInfo.Assigned(this.pullDownRefresh.txt.more)) {
      this.pullDownText = this.pullDownRefresh.txt.more;
    }
  }

  // 设置上拉距离
  private setPullUpLoadThreshold() {
    if (this.pullUpLoad) {
      this.pullUpLoadThreshold = -(this.getRect(this.pullupRef.nativeElement).height * 2);
      if (!TypeInfo.IsObject(this.pullUpLoad)) {
        this.pullUpLoad = <DownUpRefresh>{threshold: this.pullUpLoadThreshold};
      } else if (!TypeInfo.Assigned(this.pullUpLoad.threshold)) {
        this.pullUpLoad.threshold = this.pullUpLoadThreshold;
      }
    }
  }

  // 设置下拉配置
  private setPullDownRefresh() {
    if (this.pullDownRefresh) {
      let h = this.getRect(this.pulldownRef.nativeElement).height;
      if (!TypeInfo.IsObject(this.pullDownRefresh)) {
        this.pullDownRefresh = <DownUpRefresh>{stop: h};
      } else if (!this.pullDownRefresh.stop) {
        this.pullDownRefresh.stop = h;
      }
    }
  }

  // 初始化下拉更新
  private initPullDownRefresh() {
    this.bScroll.on('pullingDown', () => {
      this.beforePullDown = false
      this.isPullingDown = true
      this.pullingDown.emit();
    });
    this.bScroll.on('scroll', (pos) => {
      if (!this.pullDownRefresh) {
        return;
      }
      if (this.beforePullDown) {
        this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
        this.pullDownStyle = `margin-top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`;
      } else {
        this.bubbleY = 0;
      }
      if (this.isRebounding) {
        this.pullDownStyle = `margin-top:${10 - (this.pullDownRefresh.stop - pos.y)}px`;
      }
    });
  }

  // 初始化上拉加载
  private initPullUpLoad() {
    this.bScroll.on('pullingUp', () => {
      this.isPullUpLoad = true;
      this.pullingUp.emit();
    });
  }

  // 计算上拉加载提示区域bottom的距离
  private computePullUpBottom() {
    let pullUpElHeight = -(this.getRect(this.pullupRef.nativeElement).height);
    this.pullupRef.nativeElement.style.bottom = `${pullUpElHeight}px`;
    this.bScroll.on('scroll', (pos) => {
      let b = Math.abs(pos.y) - Math.abs(this.bScroll.maxScrollY) + pullUpElHeight;
      this.pullupRef.nativeElement.style.bottom = `${b}px`;
    });
  }

  // 计算下拉更新提示区域top的距离
  private computePullDownTop() {
    let pullDownHeight = -this.getRect(this.pulldownRef.nativeElement).height;
    this.pulldownRef.nativeElement.style.top = `${pullDownHeight}px`;
    this.bScroll.on('scroll', (pos) => {
      let top = pos.y + pullDownHeight;
      this.pulldownRef.nativeElement.style.top = `${top}px`;
    });
  }

  private reboundPullDown() {
    const {stopTime = 600} = this.pullDownRefresh;
    return new Promise((resolve) => {
      setTimeout(() => {
        this.isRebounding = true;
        this.bScroll.finishPullDown();
        resolve();
      }, stopTime);
    })
  }

  private afterPullDown() {
    setTimeout(() => {
      this.pullDownStyle = `margin-top:${this.pullDownInitTop}px`;
      this.beforePullDown = true;
      this.isRebounding = false;
      this.refresh();
    }, this.bScroll.options.bounceTime);
  }

  getRect(el) {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
  }
}

interface DownUpRefresh
{
  deep?: boolean;
  stop?: number;
  threshold?: number;
  stopTime?: number;
  txt?: Txt

  handler()
}

interface Txt
{
  more?: string;
  noMore?: string;
}