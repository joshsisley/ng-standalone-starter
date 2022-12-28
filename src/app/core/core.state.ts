import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { AuthState } from "./auth/auth.model";
import { authReducer } from "./auth/auth.reducer";

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer, 
}

export const metaReducers: MetaReducer<AppState>[] = [];

export interface AppState {
  auth: AuthState;
}