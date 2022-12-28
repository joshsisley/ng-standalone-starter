import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http'
import { provideRouter } from '@angular/router';
import { ROUTES } from './app/app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { authReducer } from './app/core/auth/auth.reducer';
import { AuthEffects } from './app/core/auth/auth.effects';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    provideRouter(ROUTES),
    provideStore({
      auth: authReducer,
    }),
    provideEffects([
      AuthEffects
    ]),
  ]
}).catch(err => console.error(err));
