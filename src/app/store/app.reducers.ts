import * as fromAuth from '../auth/store/auth.reducer';
import * as fromExchangeRates from '../exchange-rates/store/exchange-rates.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  auth: fromAuth.State;
  exchangeRates: fromExchangeRates.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  exchangeRates: fromExchangeRates.reducer
};
