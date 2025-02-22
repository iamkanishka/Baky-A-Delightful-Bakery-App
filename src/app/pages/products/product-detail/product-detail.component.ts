 
import { RouterExtensions } from '@nativescript/angular';
 

import { Component, ElementRef, SimpleChanges, ViewChild } from "@angular/core";
import {
  Application,
 
  Screen,
  EventData,
  Page,
 
} from "@nativescript/core";




@Component({
  selector: 'app-product-detail',
   templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  thumbnails = [
    "https://assets.winni.in/product/primary/2023/3/83221.jpeg",
    "https://www.fnp.com/images/pr/m/v300/black-forest-cake-half-kg.jpg",
    "https://www.shreemithai.com/cdn/shop/products/black-forest-cake-222028.jpg",
    "https://merakcakes.com/cdn/shop/files/VanillaChocoChipsCake.jpg",
    "https://c4.wallpaperflare.com/wallpaper/995/351/762/cake-4k-hd-top-wallpaper-preview.jpg",
  ];
  weights = ['0.5 Kg', '1 Kg', '1.5 Kg', '2 Kg', '4 Kg'];
  selectedWeight = '0.5 Kg';
  price = 25;

  screenWidth:number = Screen.mainScreen.widthDIPs;
  screenHeight:number = Screen.mainScreen.heightDIPs;
  imageAspect:string = "fill";
  thumbnailWidth:number = 0;
  thumbnailHeight:number = 0;
  thumbnailBottomPadding:number = 0;

  private scale = 1; // Default scale

  coverImage:string="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?cs=srgb&dl=pexels-zvolskiy-1721934.jpg"; 

 

  isPortrait: boolean = true;

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



  
   
    
  
    ngOnInit(): void {
      // Initial check for orientation
      this.checkOrientation();
  
      // Listen for orientation changes
      Application.on(
        Application.orientationChangedEvent,
        this.onOrientationChange,
        this
      );
    }
  
    ngOnDestroy(): void {
      // Remove listener when component is destroyed
      Application.off(
        Application.orientationChangedEvent,
        this.onOrientationChange,
        this
      );
    }
  
    checkOrientation(): void {
      this.isPortrait = this.screenHeight > this.screenWidth;
      this.thumbnailHeight =  this.screenHeight * 0.13;
      this.thumbnailWidth =  this.screenWidth * 0.90;
  
  
      this.imageAspect = this.isPortrait ? "aspectFit" : "aspectFit";
      this.thumbnailBottomPadding = this.isPortrait ? this.screenHeight * 0.05 : 0.03;
  
  
      console.log(
        `Current Orientation: ${this.isPortrait ? "Portrait" : "Landscape"}`
      );
    }
  
    onOrientationChange(args: EventData): void {
      this.checkOrientation();
    }


}
 
