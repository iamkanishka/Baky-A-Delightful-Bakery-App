import { Component, OnInit } from "@angular/core";

import { Page } from "@nativescript/core";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  constructor(private _page: Page) {
    console.log("HomeComponent");
    
    this._page.actionBarHidden = true;
  }
}
