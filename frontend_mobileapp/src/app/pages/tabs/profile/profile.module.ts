import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
