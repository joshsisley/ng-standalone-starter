import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectIsAuthenticated } from '../core/auth/auth.selectors';
import { authLogin, authLogout } from '../core/auth/auth.actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isAuthenticated$ = this.store.select(selectIsAuthenticated);

  constructor(private store: Store) {

  }

  items: string[] = ['item1', 'item2', 'item3'];

  login() {
    this.store.dispatch(authLogin());
  }

  logout() {
    this.store.dispatch(authLogout());
  }
}
