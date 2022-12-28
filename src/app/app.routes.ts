import { Route } from "@angular/router";
import { AuthGuardService } from "./core/auth/auth-guard.service";

export const ROUTES: Route[] = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(mod => mod.DashboardComponent),
    canActivate: [AuthGuardService]
  },
  { path: 'login', loadComponent: () => import('./login/login.component').then(mod => mod.LoginComponent) },
  { path: '**', redirectTo: 'dashboard' }
];