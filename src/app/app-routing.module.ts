import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './core/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bots', loadChildren: () => import('./bots/bots.module').then(m => m.BotsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
