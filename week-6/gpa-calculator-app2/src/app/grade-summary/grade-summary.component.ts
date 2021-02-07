/**
 * Title: grade-summary.component.ts
 * Author: Sarah Massie
 * Date: 6 February 2021
 * Description: Grade summary component file
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {
// tells the parent component a change has been made
// to the DOM when there is an input of grade and course
  @Input() grade: string;
  @Input() course: string;


  constructor() {

  }

  ngOnInit(): void {
  }
}
