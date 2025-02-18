import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';


@Component({
  selector: 'app-product-detail',
  
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  thumbnails = ['~/images/cake1.jpg', '~/images/cake2.jpg', '~/images/cake3.jpg', '~/images/cake4.jpg'];
  weights = ['0.5 Kg', '1 Kg', '1.5 Kg', '2 Kg', '4 Kg'];
  selectedWeight = '0.5 Kg';
  price = 25;

  constructor(private router: RouterExtensions) {}

  goBack() {
    this.router.back();
  }

  expandDescription() {
    console.log('Expand description tapped');
  }

  selectWeight(weight: string) {
    this.selectedWeight = weight;
    this.price = this.calculatePrice(weight);
  }

  calculatePrice(weight: string): number {
    const weightPrices = { '0.5 Kg': 25, '1 Kg': 40, '1.5 Kg': 55, '2 Kg': 70, '4 Kg': 130 };
    return weightPrices[weight] || 25;
  }

  addToCart() {
    console.log(`Added ${this.selectedWeight} cake to cart for $${this.price}`);
  }
}
 
