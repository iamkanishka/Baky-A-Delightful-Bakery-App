import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductsListComponent}  from './products-list/products-list.component'
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [ProductsListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
