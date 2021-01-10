/*
============================================
; Title: app.component.ts
; Date: January 8 2021
; Modified By: Sarah Massie
; Description: import component for Angular application
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
