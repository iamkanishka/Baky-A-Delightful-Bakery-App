import { Component } from '@angular/core';
import { Page } from '@nativescript/core';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.scss'
})
export class ProductGalleryComponent {
 constructor( private _page: Page) {
    this._page.actionBarHidden = true;
  }
}
