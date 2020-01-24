import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import {SharedModule} from "../shared/shared.module";
import {ExchangesRoutingModule} from "./exchanges-routing.module";



@NgModule({
  declarations: [ExchangeRatesComponent],
  imports: [
    CommonModule,
    ExchangesRoutingModule,
    SharedModule
  ]
})
export class ExchangesModule { }
