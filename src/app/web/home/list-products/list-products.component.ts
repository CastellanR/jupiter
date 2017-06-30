import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jup-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  @Input() productList: any;

  constructor() { }

  ngOnInit() {
  }

}
