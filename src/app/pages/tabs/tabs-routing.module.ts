import { NgModule, OnInit } from "@angular/core";
import { ActivatedRoute, Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
  NSEmptyOutletComponent,
} from "@nativescript/angular";

import { TabsComponent } from "./tabs.component"; // Wrapper component for the tabs

const routes: Routes = [
  {
    path: "",
    redirectTo:
      "/tabs/(homeTab:home/default//exploreTab:explore/default//wishlistTab:wishlist/default//chatTab:chat/default//profileTab:profile/default)",
    pathMatch: "full",
  },

  {
    path: "home",
    component: NSEmptyOutletComponent,
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
    outlet: "homeTab",
  },
  {
    path: "explore",
    component: NSEmptyOutletComponent,
    loadChildren: () =>
      import("./explore/explore.module").then((m) => m.ExploreModule),
    outlet: "exploreTab",
  },
  {
    path: "wishlist",
    component: NSEmptyOutletComponent,
    loadChildren: () =>
      import("./wishlist/wishlist.module").then((m) => m.WishlistModule),
    outlet: "wishlistTab",
  },
  {
    path: "chat",
    component: NSEmptyOutletComponent,
    loadChildren: () => import("./chat/chat.module").then((m) => m.ChatModule),
    outlet: "chatTab",
  },
  {
    path: "profile",
    component: NSEmptyOutletComponent,
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.ProfileModule),
    outlet: "profileTab",
  },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule],
})
export class TabsRoutingModule {
  constructor(private route: ActivatedRoute) {
    console.log(this.route);
    console.log("TabsRoutingModule");
  }
}
