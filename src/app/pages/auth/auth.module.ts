import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { AuthRoutingModule } from "./auth-routing.module";

import { NativeScriptCommonModule } from "@nativescript/angular";
import { CommonModule } from "@angular/common";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [NativeScriptCommonModule, AuthRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AuthModule {}
