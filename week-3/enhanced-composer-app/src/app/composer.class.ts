/**
 * Title: composer.class.ts
 * Author: Sarah Massie
 * Date: 14 January 2021
 * Description: TypeScript file for the composer's class
*/

import { IComposer } from './composer.interface';

// creating the details of a composer using class constructor
export class Composer {
  composers: Array<IComposer>

  constructor(  ) {
    this.composers = [
      { composerId: 100, fullName: "Pyotr Ilyich Tchaikovsky", genre: "Romantic" },
      { composerId: 101, fullName: "Ludwig van Beethoven", genre: "Classical" },
      { composerId: 102, fullName: "Johann Sebastian Bach", genre: "Classical" },
      { composerId: 103, fullName: "Wolfgang Amadeus Mozart", genre: "Classical" },
      { composerId: 104, fullName: "Johannes Brahms", genre: "Classical" },
      { composerId: 105, fullName: "Joseph Haydn", genre: "Classical" }
    ]
  }

  // return the list of composers
  getComposers() {
    return this.composers;
  }
  // loop over composer list
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      // checks if passed value is equivalent to a composer's ID
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}

