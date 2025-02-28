import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NativeScriptRouterModule } from '@nativescript/angular';

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'default', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },

];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AuthRoutingModule { }
