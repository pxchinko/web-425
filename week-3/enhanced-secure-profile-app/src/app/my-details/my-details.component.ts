/*
 * Title: my-details.component.ts
 * Author: Sarah Massie
 * Date: 9 January 2021
 * Description: component for my details
*/

import { Component, OnInit } from '@angular/core';

// creating the details of a person using class constructor
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    "#TypeScript", "#2021", "#CodingWithAngular"
  ]
  constructor( fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  toString() {
    console.log(`\n FUll name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite Color: ${this.favoriteColor}`)
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  myProfile: Person;

  constructor() {
    this.myProfile = new Person("Sarah Massie", "Sushi", "Pink")
    this.myProfile.toString();
  }

  ngOnInit(): void {
  }

}
