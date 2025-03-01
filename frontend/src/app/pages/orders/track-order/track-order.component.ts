import { Component } from '@angular/core';
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: 'app-track-order',
  imports: [],
  templateUrl: './track-order.component.html',
  styleUrl: './track-order.component.scss'
})
export class TrackOrderComponent {
  constructor(private routerExtensions: RouterExtensions) {}

  goBack() {
    this.routerExtensions.back();
  }

  trackLiveLocation() {
    // Add logic to track live location (e.g., open a map or alert)
    alert("Tracking live location...");
  }
}
