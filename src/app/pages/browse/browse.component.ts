import { Component } from "@angular/core";
import { Page } from "@nativescript/core";

@Component({
  selector: "Browse",
  templateUrl: "./browse.component.html",
})
export class BrowseComponent {
  constructor(private _page: Page) {
    this._page.actionBarHidden = true;
  }
}
