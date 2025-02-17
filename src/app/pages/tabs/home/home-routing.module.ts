import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { HomeComponent } from "./home.component";
import { CatergoriesComponent } from "./catergories/catergories.component";

const routes: Routes = [ 
  { path: "default", component: HomeComponent },
  { path: "categories", component: CatergoriesComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {}
