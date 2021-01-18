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

  isLoggedIn: Boolean;

  // using activated route to look for query parameter isLoggedIn
  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(this.route.snapshot.queryParamMap.get('isLoggedIn'))
   }

  ngOnInit(): void {
  }

}
