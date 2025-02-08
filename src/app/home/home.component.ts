import { Component, OnInit } from '@angular/core'

import { DataService, DataItem } from '../shared/data.service'
import { Page } from '@nativescript/core'
 
@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  items: Array<DataItem>

  // constructor(private _itemService: DataService) {}
  constructor(private _page: Page) {
    this._page.actionBarHidden = true;
}

  ngOnInit(): void {
    // this.items = this._itemService.getItems()
  }
}
