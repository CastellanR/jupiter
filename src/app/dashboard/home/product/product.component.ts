import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { ProductNewComponent } from './product-new/product-new.component';
import { ProductManagementComponent } from './product-management/product-management.component';
@Component({
  selector: 'jup-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 }

 const routes: Routes = [
   {
     path: 'nuevo',
     component: ProductNewComponent
   },
   {
     path: 'gestionar',
     component: ProductManagementComponent
   }
 ];
