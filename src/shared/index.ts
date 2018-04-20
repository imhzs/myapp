import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SwiperComp } from '../UltraCreation/ng-ion/swiper';
import { PageMarqueeComponent } from './component/marquee';
import { PageToolbarComponent } from './component/toolbar';
import { PagePanelComponent } from './component/panel';
import { LoadingComponent } from './component/loading/loading';
import { ScrollComponent } from '../shared/component/scroll/scroll';
import { DomChangeDirective } from '../shared/directive/dom-change.directive';

@NgModule({
  imports: [
    IonicPageModule
  ],
  declarations: [
    SwiperComp,
    PageToolbarComponent,
    PagePanelComponent,
    PageMarqueeComponent,
    DomChangeDirective,
    LoadingComponent,
    ScrollComponent
  ],
  entryComponents: [
  ],
  exports: [
    SwiperComp,
    PageToolbarComponent,
    PagePanelComponent,
    PageMarqueeComponent,
    LoadingComponent,
    ScrollComponent
  ],
})
export class SharedModule
{
}
