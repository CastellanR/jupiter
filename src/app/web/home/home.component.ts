import { Component, OnInit } from '@angular/core';

import { Product } from './../../dashboard/product/product.model';
@Component({
  selector: 'jup-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[];

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
      ]
    }

  ngOnInit() {
  }

}
