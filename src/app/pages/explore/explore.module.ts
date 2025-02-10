import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { NativeScriptCommonModule } from '@nativescript/angular';


@NgModule({
  declarations: [ExploreComponent],
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    ExploreRoutingModule
  ]
})
export class ExploreModule { }
