import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserAgreementComponent} from './user-agreement/user-agreement.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const coreRoutes: Routes = [
  {path: 'user-agreement', component: UserAgreementComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
