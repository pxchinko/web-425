/**
 * Title: home.component.ts
 * Author: Sarah Massie
 * Date: 6 February 2021
 * Description: Home component file
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})

export class GpaComponent implements OnInit {
  // tells the component that there is a change made
  // when a number is input for the gpa
  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
