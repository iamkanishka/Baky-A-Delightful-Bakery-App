import { Component } from '@angular/core';

@Component({
  selector: 'app-bakery-detail',
  templateUrl: './bakery-detail.component.html',
  styleUrl: './bakery-detail.component.scss'
})
export class BakeryDetailComponent {


  products = [
    {
      name: "Chocolate Cake",
      image: "~/images/chocolate_cake.jpg",
      rating: 4.9,
      price: 25.0,
      oldPrice: 30.0,
    },
    {
      name: "Vanilla Cake",
      image: "~/images/vanilla_cake.jpg",
      rating: 4.8,
      price: 20.0,
      oldPrice: 22.0,
    },
  ];

}
