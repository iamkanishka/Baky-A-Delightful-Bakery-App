import { NgModule } from '@angular/core';
 
import { NativeScriptModule } from '@nativescript/angular'
import { CheckoutRoutingModule } from './checkout-routing.module';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { EReceiptComponent } from './e-receipt/e-receipt.component';


@NgModule({
  declarations: [ShippingAddressComponent, EReceiptComponent],
  imports: [
    NativeScriptModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
