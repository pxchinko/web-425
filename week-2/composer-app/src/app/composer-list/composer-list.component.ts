/**
 * Title: composer-list.component.ts
 * Author: Sarah Massie
 * Date: 10 January 2021
 * Description: App component for composer list page
*/

import { Component, OnInit } from '@angular/core';

// creating the details of a person using class constructor
export default class Composer {
  fullName: string;
  genre: string;

  constructor( fullName: string, genre: string ) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']

})

// creating an array of composers and their genres accordingly
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Pyotr Ilyich Tchaikovsky", "Romantic"),
      new Composer("Ludwig van Beethoven", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Johannes Brahms", "Classical"),
      new Composer("Joseph Haydn", "Classical")
    ]
  }

  ngOnInit(): void {
  }

}
