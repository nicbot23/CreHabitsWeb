import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (typeof window !== 'undefined' && localStorage) {
      const token = localStorage.getItem('authToken');
      if (token) {
        return true;
      }
    }
    
    this.router.navigate(['/login']);
    return false;
  }
}
