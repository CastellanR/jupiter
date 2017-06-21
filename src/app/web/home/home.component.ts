import { Component, OnInit } from '@angular/core';

import { Product } from './../../dashboard/product/product.model';
import { Collections } from './collections/collections.model';
@Component({
  selector: 'jup-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[];
  collections: Collections[];

  constructor() {
      this.products = [
        new Product(
          'IPHONE 7S',
          '001',
          'assets/photos/i7.jpg',
          4,
          300
        ),
        new Product(
          'Samsung Galaxy 8',
          '002',
          'assets/photos/S8.jpg',
          3,
          500
        ),
        new Product(
          'Motorola G5s',
          '003',
          'assets/photos/g5.jpg',
          3,
          200
        )
      ],
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
