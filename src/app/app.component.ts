import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/auth/auth-guard.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [AuthGuardService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) { }
  
  title = 'pc-web-client';

  navigateToLogin() {
    this.router.navigate(['login']);
  }
}
