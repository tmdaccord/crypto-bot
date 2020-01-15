import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as RatesActions from './exchange-rates.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Rate} from '../rate.model';
import {of} from 'rxjs';

const handleError = (errorResponse) => {
  console.log(errorResponse);
  let errorMessage = 'An unknown error occurred!';
  // TODO
  errorMessage = 'An unknown error occurredgd!';
  // if (errorResponse.error && errorResponse.error.error) {
  //   switch (errorResponse.error.error.message) {
  //     case 'EMAIL_EXISTS':
  //       errorMessage = 'The email address is already in use by another account';
  //       break;
  //     case 'OPERATION_NOT_ALLOWED':
  //       errorMessage = 'Password sign-in is disabled for this project';
  //       break;
  //     case 'TOO_MANY_ATTEMPTS_TRY_LATER':
  //       errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later';
  //       break;
  //     case 'EMAIL_NOT_FOUND':
  //       errorMessage = 'There is no user record corresponding to this email';
  //       break;
  //     case 'INVALID_PASSWORD':
  //       errorMessage = 'The password is invalid';
  //       break;
  //     case 'USER_DISABLED':
  //       errorMessage = 'The user account has been disabled by an administrator';
  //       break;
  //   }
  // }
  return of(RatesActions.fetchRatesFail({error: errorMessage}));
};

@Injectable()
export class ExchangeRatesEffects {
  fetchRates$ = createEffect(() => this.actions$.pipe(
    ofType(RatesActions.fetchRates),
    switchMap(() => {
      return this.httpClient.get('https://apiv2.bitcoinaverage.com/constants/exchangerates/global').pipe(
        catchError(errorResponse => handleError(errorResponse)),
        map((response: { rates }) => {
          const responseRates = response.rates;
          if (!responseRates) {
            return RatesActions.fetchRatesFail({error: 'Something wrong!'});
          }
          const rates = Object.keys(responseRates).map(key => {
            return new Rate(key, responseRates[key].name, responseRates[key].rate);
          });
          return RatesActions.setRates({rates});
        })
      );
    })
  ));

  constructor(private actions$: Actions, private httpClient: HttpClient) {
  }
}
