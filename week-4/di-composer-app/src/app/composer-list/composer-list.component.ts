/**
 * Title: composer-list.component.ts
 * Author: Sarah Massie
 * Date: 14 January 2021
 * Description: App component for composer list page
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// importing composer interface and service
import { IComposer } from '../composer.interface'
import { ComposerService } from '../composer.service'

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']

})

// creating an array of composers from the function getComposers
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  }

  ngOnInit(): void {
  }

}
