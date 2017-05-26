import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProductNewComponent } from './product/product-new/product-new.component';
import { ProductManagementComponent } from './product/product-management/product-management.component';

@Component({
  selector: 'jup-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  routes: Routes = [
    {
      path: 'home',
      component: HomeComponent,
      children: [{
        path: 'productos',
        component: ProductComponent,
        children: [
          {
            path:'nuevo',
            component: ProductNewComponent
          },
          {
            path:'gestionar',
            component: ProductManagementComponent
          }
        ]
      }]
    }];  
}
