import {Action, createReducer, on} from '@ngrx/store';
import * as RatesActions from './exchange-rates.actions';
import {Rate} from '../rate.model';

export interface State {
  rates: Rate[];
  errorMessage: string;
}

export const initialState: State = {
  rates: null,
  errorMessage: null
};

const exchangeRatesReducer = createReducer(
  initialState,
  on(RatesActions.fetchRatesFail, (state, {error}) => {
    return {
      ...state,
      errorMessage: error
    };
  }),
  on(RatesActions.setRates, (state, {rates}) => ({
    ...state,
    rates: [...rates],
    errorMessage: null
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return exchangeRatesReducer(state, action);
}
