import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/app.reducers';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './auth/store/auth.effects';
import {ExchangeRatesModule} from './exchange-rates/exchange-rates.module';
import {ExchangeRatesEffects} from './exchange-rates/store/exchange-rates.effects';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AuthModule,
    SharedModule,
    ExchangeRatesModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, ExchangeRatesEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
