import * as fromAuth from '../auth/store/auth.reducer';
import * as fromExchangeRates from '../exchange-rates/store/exchange-rates.reducer';
import * as fromBots from '../bots/store/bot.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  auth: fromAuth.State;
  exchangeRates: fromExchangeRates.State;
  userBots: fromBots.State
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  exchangeRates: fromExchangeRates.reducer,
  userBots: fromBots.reducer
};
