import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductGalleryComponent } from "./product-gallery/product-gallery.component";

@NgModule({
  declarations: [ProductsListComponent, ProductDetailComponent, ProductGalleryComponent],
  imports: [NativeScriptCommonModule, ProductsRoutingModule], 
   schemas: [NO_ERRORS_SCHEMA],
})
export class ProductsModule {}
