import {Action, createReducer, on} from '@ngrx/store';
import * as ExchangesActions from './exchanges.actions';
import {Rate} from '../rate.model';
import {Exchange} from "../../bots/exchange.model";
import * as BotActions from "../../bots/store/bot.actions";

export interface State {
  rates: Rate[];
  errorMessage: string;
  exchanges: Exchange[];
}

export const initialState: State = {
  rates: null,
  errorMessage: null,
  exchanges: []
};

const exchangesReducer = createReducer(
  initialState,
  on(ExchangesActions.setExchanges, (state, {exchanges}) => ({
    ...state,
    exchanges: [...exchanges]
  })),
  on(ExchangesActions.fetchRatesFail, (state, {error}) => {
    return {
      ...state,
      errorMessage: error
    };
  }),
  on(ExchangesActions.setRates, (state, {rates}) => ({
    ...state,
    rates: [...rates],
    errorMessage: null
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return exchangesReducer(state, action);
}
