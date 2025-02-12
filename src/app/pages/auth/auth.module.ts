import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
 

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    AuthRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],

})
export class AuthModule { }
