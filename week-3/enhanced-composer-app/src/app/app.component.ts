/**
 * Title: app.component.ts
 * Author: Sarah Massie
 * Date: 10 January 2021
 * Description: App component for composing the application
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment = 'Exercise 3.2 - Passing Data to Routes, Part 1';
}
