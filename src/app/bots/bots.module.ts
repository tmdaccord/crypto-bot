import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotsListComponent } from './bots-list/bots-list.component';
import {BotsRoutingModule} from './bots-routing.module';



@NgModule({
  declarations: [BotsListComponent],
  imports: [
    CommonModule,
    BotsRoutingModule
  ]
})
export class BotsModule { }
