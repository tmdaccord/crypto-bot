import {Directive, DoCheck, EmbeddedViewRef, Input, IterableDiffer, IterableDiffers, TemplateRef, ViewContainerRef, ViewRef} from '@angular/core';

@Directive({
  selector: '[appMultipleColumns]'
})
export class MultipleColumnsDirective implements DoCheck {
  private _items: any;
  private _diffrence: IterableDiffer<any>;
  private map: Map<any, ViewRef> = new Map<any, ViewRef>();

  @Input('appMultipleColumnsOf') set appMultipleColumnsOf(items: any) {
    this._items = items;
    if (items) {
      this._diffrence = this.differs.find(items).create();
    }
  };

  constructor(private templateRef: TemplateRef<any>,
              private vcRef: ViewContainerRef,
              private differs: IterableDiffers) {
  }

  ngDoCheck(): void {
    if (this._diffrence) {
      const what_changes = this._diffrence.diff(this._items);
      if (what_changes) {
        what_changes.forEachAddedItem((item: any) => {
          const embeddedView: ViewRef = this.vcRef.createEmbeddedView(this.templateRef, {"\$implicit": item.item});
          this.map.set(item.item, embeddedView);
        });
        what_changes.forEachRemovedItem((item: any) => {
          const currView = this.map.get(item.item);
          const viewIndex = this.vcRef.indexOf(currView);
          this.vcRef.remove(viewIndex);
          this.map.delete(item.item);
        });
        what_changes.forEachIdentityChange((item: any) => {
          const currView: EmbeddedViewRef<any> =
            <EmbeddedViewRef<any>>this.map.get(item.item);
          (currView.context).$implicit = item.item;
        });
      }
    }
  }
}
