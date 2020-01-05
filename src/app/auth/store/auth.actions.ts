import {createAction, props} from '@ngrx/store';

export const signupStart = createAction('[Auth] Signup Start', props<{ email: string, password: string }>());
export const signinStart = createAction('[Auth] Signin Start', props<{ email: string, password: string }>());
export const authenticateSuccess = createAction('[Auth] Authenticate',
  props<{ email: string, userId: string, token: string, expirationDate: Date, redirect: boolean }>());
export const authenticateFail = createAction('[Auth] Authenticate Fail', props<{ errorMessage: string }>());
export const autoSignin = createAction('[Auth] Auto Signin');
export const signout = createAction('[Auth] Signout');
