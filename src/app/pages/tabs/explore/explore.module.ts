import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { GoogleMapsModule } from '@nativescript/google-maps/angular';

@NgModule({
  declarations: [ExploreComponent],
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    ExploreRoutingModule,
    GoogleMapsModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ExploreModule { }
