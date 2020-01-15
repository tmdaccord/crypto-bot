import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExchangeRatesComponent} from './exchange-rates.component';
import {ExchangeRatesRoutingModule} from './exchange-rates-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ExchangeRatesComponent],
  imports: [
    CommonModule,
    ExchangeRatesRoutingModule,
    SharedModule
  ]
})
export class ExchangeRatesModule {
}
