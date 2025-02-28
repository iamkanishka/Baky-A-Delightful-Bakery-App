import { Component } from '@angular/core';
import { Page } from '@nativescript/core';

@Component({
  selector: 'app-sign-up',
 
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  constructor(private _page: Page) {
    this._page.actionBarHidden = true;
  }
}

 