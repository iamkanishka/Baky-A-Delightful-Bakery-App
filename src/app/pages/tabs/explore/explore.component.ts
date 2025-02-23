import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from '@nativescript/core';

@Component({
  selector: 'app-explore',
 
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {
  constructor(private _page: Page, private router: Router) {
    this._page.actionBarHidden = true;
  }
}
