import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.reducers";
import {Exchange} from "../exchange.model";
import {Subscription} from "rxjs";
import * as BotActions from '../store/bot.actions';
import * as ExchangesActions from '../../exchanges/store/exchanges.actions';
import {Bot} from "../bot.model";

@Component({
  selector: 'app-bot-edit',
  templateUrl: './bot-edit.component.html',
  styleUrls: ['./bot-edit.component.scss']
})
export class BotEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode = false;
  botForm: FormGroup;
  nameInput = new FormControl('', [Validators.required]);
  exchangesSelect = new FormControl('', [Validators.required]);
  exchanges: Exchange[];
  // botSubscription: Subscription;
  exchangesSubscription: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
    });
    this.store.dispatch(ExchangesActions.fetchExchanges());
    this.exchangesSubscription = this.store.select('exchanges')
      .subscribe(exchangesState => {
        this.exchanges = exchangesState.exchanges;
      });
    this.initForm();
  }

  onSubmit() {
    // const botFormValue = this.botForm.value;
    // const bot = new Bot(botFormValue.);

    if (this.editMode) {
      // this.store.dispatch(BotActions.updateBot({}));
    } else {
      this.store.dispatch(BotActions.addBot({bot: this.botForm.value}));
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    this.botForm = new FormGroup({
      name: this.nameInput,
      exchanges: this.exchangesSelect
    });
  }

  ngOnDestroy() {
    // this.botSubscription.unsubscribe();
    this.exchangesSubscription.unsubscribe()
  }
}
