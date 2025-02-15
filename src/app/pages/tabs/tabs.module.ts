import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [TabsComponent],
  imports: [
    NativeScriptCommonModule,
    CommonModule,
    TabsRoutingModule
  ],
 
})
export class TabsModule { 
  constructor() {
    console.log("TabsModule");
  }
}
