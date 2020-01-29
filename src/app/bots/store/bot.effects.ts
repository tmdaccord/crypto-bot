import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as BotActions from './bot.actions';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {AppState} from '../../store/app.reducers';
import {Store} from '@ngrx/store';
import {Bot} from "../bot.model";
import * as ExchangesActions from "../../exchanges/store/exchanges.actions";

@Injectable()
export class BotEffects {
  storeBots$ = createEffect(
    () => this.actions$.pipe(
      ofType(BotActions.addBot),
      withLatestFrom(this.store.select('userBots'), this.store.select('auth')),
      switchMap(([action, botsState, authState]) => {
        return this.httpClient.put('https://ng-crypto-bot.firebaseio.com/bots/' + authState.user.id + '.json',
          botsState.bots
        ).pipe(
          map(() => {
            return action;
          })
        );
      })
    ),
    {dispatch: false}
  );

  fetchBots$ = createEffect(() => this.actions$.pipe(
    ofType(BotActions.fetchBots),
    withLatestFrom(this.store.select('auth')),
    switchMap(([action, authState]) => {
      return this.httpClient.get<Bot[]>('https://ng-crypto-bot.firebaseio.com/bots/' + authState.user.id + '.json').pipe(
        map(bots => {
          if (!bots) {
            return BotActions.fetchBotsFail({error: 'Something wrong!'});
          }
          return BotActions.setBots({bots});
        })
      );
    })
  ));

  constructor(private actions$: Actions, private httpClient: HttpClient, private store: Store<AppState>) {
  }
}
