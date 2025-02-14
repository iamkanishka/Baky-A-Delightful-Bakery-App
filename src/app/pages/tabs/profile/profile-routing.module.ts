import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { ProfileComponent } from "./profile.component";


const routes: Routes = [
  { path: '', redirectTo: "default", pathMatch: "full" },
  { path: "default", component: ProfileComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ProfileRoutingModule { }
