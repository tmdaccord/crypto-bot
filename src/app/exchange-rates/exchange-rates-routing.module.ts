import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ExchangeRatesComponent} from './exchange-rates.component';


const exchangeRoutes: Routes = [
  {path: 'exchange-rates', component: ExchangeRatesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(exchangeRoutes)],
  exports: [RouterModule]
})
export class ExchangeRatesRoutingModule {
}
