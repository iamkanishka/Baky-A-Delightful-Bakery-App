import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
 

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    AuthRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],

})
export class AuthModule { }
