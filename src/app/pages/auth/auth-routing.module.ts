import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NativeScriptRouterModule } from '@nativescript/angular';

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'default', component: SigninComponent },
  { path: 'signup', component: SignupComponent },

];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class AuthRoutingModule { }
