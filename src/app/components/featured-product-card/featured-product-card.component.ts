import { Component, Input } from "@angular/core";
import { Screen } from "@nativescript/core";
@Component({
  selector: "app-featured-product-card",
  templateUrl: "./featured-product-card.component.html",
  styleUrl: "./featured-product-card.component.scss",
})
export class FeaturedProductCardComponent {
  cardWidth = Screen.mainScreen.widthDIPs * 0.50;
 @Input() product: any; 
}
