import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
 
import { NativeScriptModule } from '@nativescript/angular'
import { CheckoutRoutingModule } from './checkout-routing.module';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { EReceiptComponent } from './e-receipt/e-receipt.component';
import { ReviewSummaryComponent } from './review-summary/review-summary.component';


@NgModule({
  declarations: [ShippingAddressComponent, EReceiptComponent, ReviewSummaryComponent],
  imports: [
    NativeScriptModule,
    CheckoutRoutingModule
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class CheckoutModule { }
