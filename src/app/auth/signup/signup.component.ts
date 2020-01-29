import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  checkAgreement = new FormControl(false, [Validators.requiredTrue]);
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

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }
    const email = this.email.value;
    const password = this.password.value;

    this.store.dispatch(AuthActions.signupStart({email, password}));
    this.signupForm.reset();
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  private initForm() {
    this.signupForm = new FormGroup({
      email: this.email,
      password: this.password,
      checkAgreement: this.checkAgreement
    });
  }
}
