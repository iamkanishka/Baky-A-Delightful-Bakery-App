import { Component, OnInit } from "@angular/core";

import { Page } from "@nativescript/core";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
})
export class HomeComponent{
  // constructor(private _itemService: DataService) {}
  constructor(private _page: Page) {
    this._page.actionBarHidden = true;
  }

  ngOnInit(): void {
    // this.items = this._itemService.getItems()
  }
}
