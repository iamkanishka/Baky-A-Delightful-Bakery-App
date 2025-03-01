import { Component } from '@angular/core';

@Component({
  selector: 'app-bakery-card',
  imports: [],
  templateUrl: './bakery-card.component.html',
  styleUrl: './bakery-card.component.scss'
})
export class BakeryCardComponent {
  bakery = {
    name: 'Rise & Shine Bakery Co.',
    categories: 'Cup Cake, Cookies, Donuts, Breads, Cake,...',
    rating: 4.8,
    reviews: '1k+',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    distance: '15 min • 1.5km',
    hours: 'Mon - Sun 11am - 11pm',
    customers: '9,500+',
    products: '250+',
    avgRating: '4.9+',
    totalReviews: '4,956',
  }
}
