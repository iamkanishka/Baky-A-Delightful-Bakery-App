import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishlistRoutingModule } from './wishlist-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    WishlistRoutingModule
  ]
})
export class WishlistModule { }
