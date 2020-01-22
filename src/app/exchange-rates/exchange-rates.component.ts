import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.reducers';
import * as RatesActions from './store/exchange-rates.actions';
import {Rate} from './rate.model';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss']
})
export class ExchangeRatesComponent implements OnInit {
  rates: Observable<Rate[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(RatesActions.fetchRates());
    this.rates = this.store.select('exchangeRates')
      .pipe(map(ratesState => {
        return ratesState.rates;
      }));
  }
}
