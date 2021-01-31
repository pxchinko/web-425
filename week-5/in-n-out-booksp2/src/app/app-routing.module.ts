/**
 * Title: app-routing.module.ts
 * Author: Sarah Massie
 * Date: 30 January 2021
 * Description: Routing module for the entire application
*/

import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './book-list/book-list.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'book-list',
    pathMatch: 'full'
  },
  {
    path: 'book-list',
    component: BookListComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
