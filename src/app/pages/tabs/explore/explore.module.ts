import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreComponent } from './explore.component';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { GoogleMapsModule } from '@nativescript/google-maps/angular';
import {MapComponent} from '../../shared/map/map.component'
@NgModule({
  declarations: [ExploreComponent],
  imports: [
    NativeScriptCommonModule,
    ExploreRoutingModule,
    GoogleMapsModule,
    MapComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ExploreModule { }
