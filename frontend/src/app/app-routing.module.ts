import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";
import { TabsComponent } from "./pages/tabs/tabs.component";
 
const routes: Routes = [
  // {
  //   path: "auth",
  //   loadChildren: () =>
  //     import("./pages/auth/auth.module").then((m) => m.AuthModule),
  // },
  // {
  //   path: "",
  //   redirectTo: "auth",
  //   pathMatch: "full",
  // },

  {
    path: "",
    redirectTo: "tabs",
    pathMatch: "full",
  },

  {
    path: "tabs",
    component: TabsComponent,
    loadChildren: () =>
      import("./pages/tabs/tabs.module").then((m) => m.TabsModule),
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
