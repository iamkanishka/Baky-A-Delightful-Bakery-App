import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import {
  NativeScriptRouterModule,
   
} from "@nativescript/angular";

const routes: Routes = [
  //  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  // { path: '', redirectTo: 'auth', pathMatch: 'full' }

  {
    path: "tabs",
    loadChildren: () =>
      import("./pages/tabs/tabs.module").then((m) => m.TabsModule),
    // canActivate: [AuthGuard] // Protect TabsModule
  },
  { path: "", redirectTo: "tabs", pathMatch: "full" },

  // {
  //   path: '',
  //   redirectTo: '/tabs',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  // },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule),
  //   canActivate: [AuthGuard] // Protect TabsModule
  // }
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
