/**
 * Title: composer.service.ts
 * Author: Sarah Massie
 * Date: 24 January 2021
 * Description: TypeScript file for the composer service
*/

import { IComposer } from './composer.interface'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// create an instance of the composer class
export class ComposerService {

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
  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
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

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(
      map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1))
    )
  }
}
