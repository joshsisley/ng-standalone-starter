import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

import { selectIsAuthenticated } from './auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsAuthenticated).pipe(
      tap(isAuthenticated => {
        console.log(isAuthenticated);
        if (!isAuthenticated) {
          this.router.navigate(['login']);
        }
      })
    )
  }
}