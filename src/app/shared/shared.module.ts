import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MultipleColumnsDirective} from './multiple-columns.directive';


@NgModule({
  declarations: [MultipleColumnsDirective],
  imports: [
    CommonModule
  ],
  exports: [
    MultipleColumnsDirective
  ]
})
export class SharedModule {
}
