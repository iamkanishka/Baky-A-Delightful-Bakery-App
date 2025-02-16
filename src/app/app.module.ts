import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './pages/tabs/tabs.component';
 
 
@NgModule({
  bootstrap: [AppComponent ],
  imports: [NativeScriptModule,HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, TabsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
