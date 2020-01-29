import {Action, createReducer, on} from '@ngrx/store';
import * as BotActions from './bot.actions';
import {Bot} from '../bot.model';
import * as ExchangesActions from "../../exchanges/store/exchanges.actions";

export interface State {
  bots: Bot[];
}

export const initialState: State = {
  bots: []
};

const botReducer = createReducer(
  initialState,

  on(BotActions.setBots, (state, {bots}) => ({
    ...state,
    bots: [...bots]
  })),
  on(BotActions.addBot, (state, {bot}) => ({
    ...state,
    bots: [...state.bots, bot]
  })),
);

export function reducer(state: State | undefined, action: Action) {
  return botReducer(state, action);
}
