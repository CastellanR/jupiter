import { Component, OnInit } from '@angular/core';

import { Product } from './../../dashboard/product/product.model';
@Component({
  selector: 'jup-home-1',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  product: Product[];

  constructor() {
      this.product=[
        new Product(
          'IPHONE 7S',
          '001',
          'resources/photos/i7.jpg',
          4,
          300
        ),
        new Product(
          'Samsung Galaxy 8',
          '002',
          'resources/photos/s8.jpg',
          3,
          500
        ),
        new Product(
          'Motorola G5s',
          '003',
          'resources/photos/g5.jpg',
          3,
          200
        )
      ]
    }

  ngOnInit() {
  }

}
