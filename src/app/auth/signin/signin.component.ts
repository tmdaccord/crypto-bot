import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {
  signinForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  showPassword = false;
  error: string = null;
  isLoading = false;
  private storeSub: Subscription;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.storeSub = this.store.select('auth').subscribe(authState => {
      this.isLoading = authState.loading;
      this.error = authState.authError;
    });
    this.initForm();
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }

  onSubmit() {
    if (!this.signinForm.valid) {
      return;
    }
    const email = this.email.value;
    const password = this.password.value;

    this.store.dispatch(AuthActions.signinStart({email, password}));
    this.signinForm.reset();
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  private initForm() {
    this.signinForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }
}
