import { NgModule } from '@angular/core';
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
    
  ]
})
export class BakeriesModule { }
