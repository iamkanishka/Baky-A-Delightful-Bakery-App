import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';


@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    CommonModule,
    TabsRoutingModule
  ]
})
export class TabsModule { }
