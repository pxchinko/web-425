/**
 * Title: composer-list.component.ts
 * Author: Sarah Massie
 * Date: 14 January 2021
 * Description: App component for composer list page
*/

import { Component, OnInit } from '@angular/core';

// importing composer class and interface
import { IComposer } from '../composer.interface'
import { Composer } from '../composer.class'

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']

})

// creating an array of composers from the function getComposers
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>

  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {
  }

}
