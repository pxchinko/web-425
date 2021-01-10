/*
============================================
; Title: app.component.ts
; Date: January 8 2021
; Modified By: Sarah Massie
; Description: Home component for Angular application
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
