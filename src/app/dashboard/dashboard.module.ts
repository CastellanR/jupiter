import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductComponent } from './home/product/product.component';
import { ProductNewComponent } from './home/product/product-new/product-new.component';
import { ProductManagementComponent } from './home/product/product-management/product-management.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [DashboardComponent, HomeComponent, NavbarComponent, SidebarComponent, ProductComponent, ProductNewComponent, ProductManagementComponent]
})
export class DashboardModule { }
