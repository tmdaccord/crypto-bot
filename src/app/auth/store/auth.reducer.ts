import {Action, createReducer, on} from '@ngrx/store';
import * as AuthActions from './auth.actions';
import {User} from '../user.model';

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

export const initialState: State = {
  user: null,
  authError: null,
  loading: false
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.signinStart, state => {
    return {
      ...state,
      authError: null,
      loading: true
    };
  }),
  on(AuthActions.signupStart, state => {
    return {
      ...state,
      authError: null,
      loading: true
    };
  }),
  on(AuthActions.authenticateSuccess, (state, {email, userId, token, expirationDate}) => {
    const user = new User(email, userId, token, expirationDate);
    return {
      ...state,
      user,
      authError: null,
      loading: false
    };
  }),
  on(AuthActions.authenticateFail, (state, {errorMessage}) => {
    return {
      ...state,
      user: null,
      authError: errorMessage,
      loading: false
    };
  }),
  on(AuthActions.signout, (state) => ({
    ...state,
    user: null
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return authReducer(state, action);
}
