import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ListProductsComponent } from './home/list-products/list-products.component';
import { CollectionsComponent } from './home/collections/collections.component';
import { OffersComponent } from './home/offers/offers.component';
import { BestSellingComponent } from './home/best-selling/best-selling.component';
import { ProductRowComponent } from './home/list-products/product-row/product-row.component';
import { ProductImageComponent } from './home/list-products/product-row/product-image/product-image.component';
import { ProductPriceComponent } from './home/list-products/product-row/product-price/product-price.component';
import { ProductReviewComponent } from './home/list-products/product-row/product-review/product-review.component';
import { WebComponent } from './web/web.component';
import { ReviewComponent } from './home/list-products/product-row/product-review/review/review';
import { WebRoutingModule } from './web-routing.module';

@NgModule({
  imports: [
    CommonModule,
    WebRoutingModule
  ],
  declarations: [HomeComponent, LoginComponent, AccountComponent, CartComponent, CheckoutComponent, ListProductsComponent, CollectionsComponent, OffersComponent, BestSellingComponent, ProductRowComponent, ProductImageComponent, ProductPriceComponent, ProductReviewComponent, WebComponent, ReviewComponent]
})
export class WebModule { }
