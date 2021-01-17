/**
 * Title: sign-in.guard.ts
 * Author: Sarah Massie
 * Date: 17 January 2021
 * Description: Sign in guard for the sign in component
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router) {

  }

  // activates a login to the account
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLoggedIn = next.queryParams.isLoggedIn;

    if (isLoggedIn) {
      return true;
    } else {
      // navigates the user back to the home page if they can't log in
      this.router.navigate(['/']);
      return false;
    }
  }
}
