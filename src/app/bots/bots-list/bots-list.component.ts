import {Component, OnDestroy, OnInit} from '@angular/core';
import {Bot} from "../bot.model";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";
import {map} from "rxjs/operators";

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
    this.subscription = this.store.select('userBots')
      .pipe(map(botsState => {
        return botsState.bots;
      }))
      .subscribe((bots: Bot[]) => {
        this.bots = bots;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
