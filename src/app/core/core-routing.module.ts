import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserAgreementComponent} from './user-agreement/user-agreement.component';

const coreRoutes: Routes = [
  {path: 'user-agreement', component: UserAgreementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
