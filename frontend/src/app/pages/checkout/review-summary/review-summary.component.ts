import { Component } from '@angular/core';
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: 'app-review-summary',
  imports: [],
  templateUrl: './review-summary.component.html',
  styleUrl: './review-summary.component.scss'
})
export class ReviewSummaryComponent {
  constructor(private routerExtensions: RouterExtensions) {}

  goBack() {
    this.routerExtensions.back();
  }

  continueAction() {
    // Add logic for continue action (e.g., navigate to next screen or alert)
    alert("Continuing to the next step...");
  }
}
