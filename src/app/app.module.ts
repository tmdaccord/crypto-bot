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
import {ExchangesModule} from './exchanges/exchanges.module';
import {ExchangesEffects} from './exchanges/store/exchanges.effects';
import {SharedModule} from './shared/shared.module';
import {BotsModule} from './bots/bots.module';
import {BotEffects} from "./bots/store/bot.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    ExchangesModule,
    CoreModule,
    BotsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects, ExchangesEffects, BotEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
