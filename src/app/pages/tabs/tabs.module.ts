import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TabsRoutingModule } from "./tabs-routing.module";
import { NativeScriptCommonModule } from "@nativescript/angular";

import { TabsComponent } from "./tabs.component";

@NgModule({
  bootstrap: [TabsComponent],

  declarations: [TabsComponent],
  imports: [NativeScriptCommonModule, TabsRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class TabsModule {
  constructor() {
    console.log("TabsModule");
  }
}
