import { Component, OnInit, Input } from '@angular/core';

import { Product } from './../../../dashboard/product/product.model';
@Component({
  selector: 'jup-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  @Input() productList: Product[];

  constructor() { }

  ngOnInit() {
  }

}
