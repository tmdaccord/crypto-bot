import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import {BotsComponent} from "./bots.component";
import {BotStartComponent} from "./bot-start/bot-start.component";
import {BotEditComponent} from "./bot-edit/bot-edit.component";
import {BotDetailComponent} from "./bot-detail/bot-detail.component";


const botsRoutes: Routes = [
  {
    path: '', component: BotsComponent, canActivate: [AuthGuard], children: [
      {path: '', component: BotStartComponent},
      {path: 'new', component: BotEditComponent},
      {path: ':id', component: BotDetailComponent},
      {path: ':id/edit', component: BotEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(botsRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class BotsRoutingModule {
}
