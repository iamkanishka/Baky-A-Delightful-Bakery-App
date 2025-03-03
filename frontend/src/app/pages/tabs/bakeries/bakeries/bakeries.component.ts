import { Component } from '@angular/core';

@Component({
  selector: 'app-bakeries',
  templateUrl: './bakeries.component.html',
  styleUrl: './bakeries.component.scss'
})
export class BakeriesComponent {
  bakeries = [
    {
      name: "Rise & Shine Bakery Co.",
      description: "Cup Cake, Cookies, Donuts, Breads, Cake..",
      address: "8502 Preston Rd. Inglewood, Maine 98380",
      image: "~/images/bakery1.jpg",
    },
    {
      name: "Sweet Confections Cottage",
      description: "Cup Cake, Cookies, Donuts, Breads, Cake..",
      address: "4140 Parker Rd. Allentown, New Mexico 31134",
      image: "~/images/bakery2.jpg",
    },
  ];
}
