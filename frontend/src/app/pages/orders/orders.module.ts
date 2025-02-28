import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { OrdersRoutingModule } from './orders-routing.module';
import {TrackLiveLocationComponent} from './track-live-location/track-live-location.component';
import {TrackOrderComponent} from './track-order/track-order.component';
 
@NgModule({
  declarations: [TrackOrderComponent, TrackLiveLocationComponent ],
  imports: [
    NativeScriptCommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
