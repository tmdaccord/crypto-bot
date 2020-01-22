import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { GroupedPipe } from './grouped.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    GroupedPipe
  ],
  declarations: [GroupedPipe]
})
export class SharedModule {
}
