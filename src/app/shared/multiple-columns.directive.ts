import {ChangeDetectorRef, Directive, Input, IterableDiffer, IterableDiffers, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMultipleColumns]'
})
export class MultipleColumnsDirective {
  private _items: any;
  private _diffrence: IterableDiffer<any>;
  @Input('appMultipleColumnsOf') set appMultipleColumnsOf(items: any) {
    this._items = items;
    if (items) {
      // this._diffrence = this.differs.find(items).create(this.cd);
    //  TODO
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private vcRef: ViewContainerRef,
              private differs: IterableDiffers,
              private cd: ChangeDetectorRef) {
  }

}
