import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductComponent } from './product/product.component';
import { ProductNewComponent } from './product/product-new/product-new.component';
import { ProductManagementComponent } from './product/product-management/product-management.component';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [DashboardComponent, NavbarComponent, SidebarComponent, ProductComponent, ProductNewComponent, ProductManagementComponent, ClientComponent, LoginComponent, CartComponent]
})
export class DashboardModule { }
