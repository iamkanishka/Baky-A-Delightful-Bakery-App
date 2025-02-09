import { Component, OnInit } from '@angular/core'
import { Page } from '@nativescript/core';

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
    constructor(private _page: Page) {
      this._page.actionBarHidden = true;
    }
}
