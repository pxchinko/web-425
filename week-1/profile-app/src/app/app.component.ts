  /**
 * Title: app.component.ts
 * Author: Sarah Massie
 * Date: 19 December 2020
 * Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile-app';
  assignment: string = 'Assignment 1.5 Components'
}
