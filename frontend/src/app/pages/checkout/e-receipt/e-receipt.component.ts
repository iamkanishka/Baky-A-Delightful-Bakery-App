import { Component } from '@angular/core';
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: 'app-e-receipt',
  templateUrl: './e-receipt.component.html',
  styleUrl: './e-receipt.component.scss'
})
export class EReceiptComponent {
  constructor(private routerExtensions: RouterExtensions) {}

  goBack() {
    this.routerExtensions.back();
  }
}
