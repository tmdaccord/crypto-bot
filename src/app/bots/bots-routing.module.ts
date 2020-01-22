import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BotsListComponent} from './bots-list/bots-list.component';
import {AuthGuard} from '../auth/auth.guard';


const botsRoutes: Routes = [
  {path: 'bots-list', component: BotsListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(botsRoutes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class BotsRoutingModule {
}
