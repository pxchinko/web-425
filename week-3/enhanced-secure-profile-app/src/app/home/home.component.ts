/**
 * Title: home.component.ts
 * Author: Sarah Massie
 * Date: 14 January 2021
 * Description: Home component file
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  assignment: string = 'Exercise 3.4 - Guarding Routes';

  ngOnInit(): void {
  }

}
