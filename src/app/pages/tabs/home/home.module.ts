import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {CatergoriesComponent} from './catergories/catergories.component';
import {CategoriesListComponent} from '../../../components/categories-list/categories-list.component';
import {HomeHeaderComponent} from '../../../components/home-header/home-header.component';
import {BannerComponent} from '../../../components/banner/banner.component';
import {FeaturedProductCardComponent} from '../../../components/featured-product-card/featured-product-card.component';


 
 
@NgModule({
  imports: [NativeScriptCommonModule, NativeScriptRouterModule, HomeRoutingModule],
  declarations: [HomeComponent, CatergoriesComponent, CategoriesListComponent, HomeHeaderComponent, BannerComponent, FeaturedProductCardComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
