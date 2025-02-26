import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule } from "@nativescript/angular";
import { CheckoutRoutingModule } from "./checkout-routing.module";
import { ShippingAddressComponent } from "./shipping-address/shipping-address.component";
import { EReceiptComponent } from "./e-receipt/e-receipt.component";
import { ReviewSummaryComponent } from "./review-summary/review-summary.component";
import { PaymentMethodsComponent } from "./payment-methods/payment-methods.component";
import { BankCardsComponent } from "./bank-cards/bank-cards.component";
import { AddBankCardComponent } from "./add-bank-card/add-bank-card.component";

@NgModule({
  declarations: [
    ShippingAddressComponent,
    EReceiptComponent,
    ReviewSummaryComponent,
    PaymentMethodsComponent,
    BankCardsComponent,
    AddBankCardComponent
  ],
  imports: [NativeScriptModule, CheckoutRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CheckoutModule {}
