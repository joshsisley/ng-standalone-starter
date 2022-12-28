import { AuthState } from './auth.model';
import { authLogin, authLogout } from './auth.actions';
import { createReducer, on, Action, createFeatureSelector } from '@ngrx/store';

export const selectAuthState = createFeatureSelector<AuthState>(
  'auth'
);

export const initialState: AuthState = {
  isAuthenticated: false
};

const reducer = createReducer(
  initialState,
  on(authLogin, (state) => ({ ...state, isAuthenticated: true })),
  on(authLogout, (state) => ({ ...state, isAuthenticated: false }))
);

export function authReducer(
  state: AuthState | undefined,
  action: Action
): AuthState {
  return reducer(state, action);
}