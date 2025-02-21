import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Page } from '@nativescript/core';


@Component({
  selector: 'app-product-detail',
   templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  thumbnails = ['https://assets.winni.in/product/primary/2023/3/83221.jpeg', 'https://www.fnp.com/images/pr/m/v300/black-forest-cake-half-kg.jpg', 'https://www.shreemithai.com/cdn/shop/products/black-forest-cake-222028.jpg', 'https://merakcakes.com/cdn/shop/files/VanillaChocoChipsCake.jpg'];
  weights = ['0.5 Kg', '1 Kg', '1.5 Kg', '2 Kg', '4 Kg'];
  selectedWeight = '0.5 Kg';
  price = 25;

  constructor(private router: RouterExtensions, private _page: Page,) {
    console.log('Prooduct Detail component');
    this._page.actionBarHidden = true;
    
  }

 

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
 
