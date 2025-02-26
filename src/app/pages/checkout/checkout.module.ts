import { NgModule } from '@angular/core';
 
import { NativeScriptModule } from '@nativescript/angular'
import { CheckoutRoutingModule } from './checkout-routing.module';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';


@NgModule({
  declarations: [ShippingAddressComponent],
  imports: [
    NativeScriptModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
