import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { NativeScriptRouterModule } from "@nativescript/angular";
import { ChatComponent } from "./chat.component";

const routes: Routes = [
  { path: "", redirectTo: "default", pathMatch: "full" },
  { path: "default", component: ChatComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class ChatRoutingModule {}
