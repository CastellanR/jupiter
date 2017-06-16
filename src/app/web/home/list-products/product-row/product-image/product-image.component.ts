import { Component, OnInit, Input } from '@angular/core';

import { Product } from './../../../../../dashboard/product/product.model';
@Component({
  selector: 'jup-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
