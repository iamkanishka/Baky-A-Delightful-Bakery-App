import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

@NgModule({
  declarations: [ProductsListComponent, ProductDetailComponent],
  imports: [NativeScriptCommonModule, ProductsRoutingModule], 
   schemas: [NO_ERRORS_SCHEMA],
})
export class ProductsModule {}
