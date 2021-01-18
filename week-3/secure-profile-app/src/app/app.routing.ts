/**
 * Title: app.routing.ts
 * Author: Sarah Massie
 * Date: 14 January 2021
 * Description: App router module
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component'

// brings up sign in page first before going to home
export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]
