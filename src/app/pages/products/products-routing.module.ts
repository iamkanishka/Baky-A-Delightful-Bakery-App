import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

const routes: Routes = [

  //  {path: "", component: ProductsListComponent },
  {path: "", component: ProductDetailComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ProductsRoutingModule { }
