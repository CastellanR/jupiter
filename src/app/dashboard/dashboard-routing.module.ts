import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { ProductNewComponent } from './product/product-new/product-new.component';
import { ProductManagementComponent } from './product/product-management/product-management.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: "full" },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'productos', component: ProductComponent,
      children: [
        { path: 'nuevo', component: ProductNewComponent },
        { path: 'gestionar', component: ProductManagementComponent }
      ] }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
