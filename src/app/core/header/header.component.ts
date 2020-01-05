import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducers';
import {map} from 'rxjs/operators';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSubscription: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.userSubscription = this.store
      .select('auth')
      .pipe(map(authState => authState.user))
      .subscribe(user => {
        this.isAuthenticated = !!user;
      });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  onSignout() {
    this.store.dispatch(AuthActions.signout());
  }
}
