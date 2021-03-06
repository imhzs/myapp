import { Directive, ElementRef, EventEmitter, OnDestroy, Output, Injectable } from '@angular/core';

@Directive({
  selector: '[domChange]'
})
@Injectable()
export class DomChangeDirective implements OnDestroy
{
  private changes: MutationObserver;

  @Output()
  public domChange = new EventEmitter();

  constructor(private elementRef: ElementRef) {
    const element = this.elementRef.nativeElement;

    this.changes = new MutationObserver((mutations: MutationRecord[]) => {
        mutations.forEach((mutation: MutationRecord) => {
          console.log(mutation);
          this.domChange.emit(mutation);
        });
      }
    );

    this.changes.observe(element, {
      attributes: true,
      childList: true,
      characterData: true
    });
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }
}