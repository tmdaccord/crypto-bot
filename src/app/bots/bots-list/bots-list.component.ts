import {Component, OnDestroy, OnInit} from '@angular/core';
import {Bot} from "../bot.model";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";
import {map} from "rxjs/operators";
import * as BotActions from '../store/bot.actions';

@Component({
  selector: 'app-bots-list',
  templateUrl: './bots-list.component.html',
  styleUrls: ['./bots-list.component.scss']
})
export class BotsListComponent implements OnInit, OnDestroy {
  bots: Bot[];
  subscription: Subscription;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(BotActions.fetchBots());
    this.subscription = this.store.select('userBots')
      .pipe(map(botsState => {
        return botsState.bots;
      }))
      .subscribe((bots: Bot[]) => {
        this.bots = bots;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
