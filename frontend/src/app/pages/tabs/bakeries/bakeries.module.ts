import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from "@nativescript/angular";
import { BakeriesRoutingModule } from './bakeries-routing.module';
import {BakeryDetailComponent} from './bakery-detail/bakery-detail.component'
import {BakeriesComponent} from './bakeries/bakeries.component'
@NgModule({
  declarations: [BakeryDetailComponent, BakeriesComponent ],
  imports: [
    NativeScriptCommonModule,
    BakeriesRoutingModule,
    
  ]
})
export class BakeriesModule { }
