import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { WishlistComponent } from "./wishlist.component";


const routes: Routes = [
  { path: '', redirectTo: "default", pathMatch: "full" },
  { path: "default", component: WishlistComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class WishlistRoutingModule { }
