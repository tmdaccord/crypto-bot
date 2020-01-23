import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotsListComponent } from './bots-list/bots-list.component';
import {BotsRoutingModule} from './bots-routing.module';
import { BotDetailComponent } from './bot-detail/bot-detail.component';
import { BotEditComponent } from './bot-edit/bot-edit.component';
import { BotsComponent } from './bots.component';
import { BotStartComponent } from './bot-start/bot-start.component';



@NgModule({
  declarations: [BotsListComponent, BotDetailComponent, BotEditComponent, BotsComponent, BotStartComponent],
  imports: [
    CommonModule,
    BotsRoutingModule
  ]
})
export class BotsModule { }
