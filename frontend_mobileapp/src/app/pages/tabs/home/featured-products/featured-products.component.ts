import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-products',
   templateUrl: './featured-products.component.html',
  styleUrl: './featured-products.component.scss'
})
export class FeaturedProductsComponent {

  featuredProducts = [
    {
      image: "https://zukachocolates.com/wp-content/uploads/2021/03/FULLY-LOADED-CHOCOLATE-TRUFFLE-CAKE-1.jpg",
      rating: 4.8,
      name: "Chocolate Cake",
      discountedPrice: 25.0,
      originalPrice: 30.0,
    },
    {
      image: "https://bluebowlrecipes.com/wp-content/uploads/2023/08/chocolate-truffle-cake-8844.jpg",
      rating: 4.8,
      name: "Choco Cookies",
      discountedPrice: 15.0,
      originalPrice: 20.0,
    },
    {
      image: "https://justbakedcake.com/wp-content/uploads/2020/11/Chocolate-Truffle-Gateaux.jpg",
      rating: 4.7,
      name: "Blueberry Muffin",
      discountedPrice: 18.0,
      originalPrice: 22.0,
    },
  ];

}
