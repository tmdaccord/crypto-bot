import * as fromAuth from '../auth/store/auth.reducer';
import * as fromExchanges from '../exchanges/store/exchanges.reducer';
import * as fromBots from '../bots/store/bot.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface AppState {
  auth: fromAuth.State;
  exchanges: fromExchanges.State;
  userBots: fromBots.State
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  exchanges: fromExchanges.reducer,
  userBots: fromBots.reducer
};
