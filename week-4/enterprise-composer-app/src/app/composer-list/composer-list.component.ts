/**
 * Title: composer-list.component.ts
 * Author: Sarah Massie
 * Date: 14 January 2021
 * Description: App component for composer list page
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// importing composer interface and service
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators'
import { Observable } from 'rxjs';;

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']

})

// creating an array of composers from the function getComposers
export class ComposerListComponent implements OnInit {

  // using the composer observable to create an array
  composers: Observable<IComposer[]>
  textSearchControl = new FormControl('');

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
    // gives a 500 ms reaction to the text search when there is an input
    this.textSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
  }

  ngOnInit(): void {
  }

  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }
}
