import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { HomeComponent } from "./home.component";
import { CatergoriesComponent } from "./catergories/catergories.component";
import { ProductsListComponent } from "../../products/products-list/products-list.component";
import { ProductDetailComponent } from "../../products/product-detail/product-detail.component";

const routes: Routes = [
  // { path: "default", component: HomeComponent },
  { path: "categories", component: CatergoriesComponent },
  {
    path: "default",
    component: ProductDetailComponent,
    loadChildren: () =>
      import("../../products/products.module").then((m) => m.ProductsModule),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
