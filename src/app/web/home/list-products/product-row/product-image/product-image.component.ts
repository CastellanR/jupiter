import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jup-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit {

  @Input() product: any;

  constructor() { }

  ngOnInit() {
  }

}
