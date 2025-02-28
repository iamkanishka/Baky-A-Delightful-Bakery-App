import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrl: "./products-list.component.scss",
})
export class ProductsListComponent {
  constructor(private _page: Page) {
    this._page.actionBarHidden = true;
  }
}
