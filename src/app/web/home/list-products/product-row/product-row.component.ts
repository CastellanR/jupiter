import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'jup-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {

  @Input() product: any;

  constructor() {}

  ngOnInit() {
  }
}
