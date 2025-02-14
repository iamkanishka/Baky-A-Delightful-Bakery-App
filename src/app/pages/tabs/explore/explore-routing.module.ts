import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { ExploreComponent } from "./explore.component";
import { NativeScriptRouterModule } from "@nativescript/angular";

const routes: Routes = [
  { path: "", redirectTo: "default", pathMatch: "full" },
  { path: "default", component: ExploreComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ExploreRoutingModule {}
