import { Component, OnInit } from '@angular/core';

import { Collections } from './collections/collections.model';
@Component({
  selector: 'jup-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collections: Collections[];

  constructor() {
    this.collections = [
        new Collections( 'Motorola' ),
        new Collections( 'Samsung' ),
        new Collections( 'Iphone' ),
        new Collections( 'LG' ),
        new Collections( 'BLU' ),
        new Collections( 'Sony' ),
      ]
    }

  ngOnInit() {
  }

}
