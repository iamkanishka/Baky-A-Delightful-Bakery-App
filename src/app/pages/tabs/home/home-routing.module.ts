import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { HomeComponent } from "./home.component";

const routes: Routes = [ 
  { path: '', redirectTo: "default", pathMatch: "full" },
  { path: "default", component: HomeComponent }
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class HomeRoutingModule {
  constructor() {
    console.log("HomeRoutingModule");
  }
}
