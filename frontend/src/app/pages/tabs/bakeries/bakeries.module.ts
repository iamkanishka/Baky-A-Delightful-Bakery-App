import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from "@nativescript/angular";
import { BakeriesRoutingModule } from './bakeries-routing.module';
import {BakeryDetailComponent} from './bakery-detail/bakery-detail.component'
import {BakeriesComponent} from './bakeries/bakeries.component'
import {MapComponent} from '../..//shared/map/map.component'
@NgModule({
  declarations: [BakeryDetailComponent, BakeriesComponent],
  imports: [
    NativeScriptCommonModule,
    BakeriesRoutingModule,
    MapComponent
    
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BakeriesModule { }
