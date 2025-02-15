import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { CommonModule } from '@angular/common'
import { ActivatedRoute } from '@angular/router'


@NgModule({
  imports: [CommonModule ,NativeScriptCommonModule, HomeRoutingModule],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {
  constructor(private route: ActivatedRoute) {
     
    console.log("HomeModule");
  }
}
