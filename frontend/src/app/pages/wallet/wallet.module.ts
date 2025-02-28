import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular'
import { WalletRoutingModule } from './wallet-routing.module';
import {TopupWalletComponent} from './topup-wallet/topup-wallet.component';
import {AddMoneyComponent} from './add-money/add-money.component';


@NgModule({
  declarations: [TopupWalletComponent],
  imports: [
    NativeScriptModule,
    WalletRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class WalletModule { }
