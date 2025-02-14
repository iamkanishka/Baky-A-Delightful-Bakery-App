import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,HttpClientModule, AppRoutingModule],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
