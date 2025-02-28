import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css'],
})
export class RecentSearchComponent {
  recentSearches: string[] = [
    'Raspberry Rhapsody',
    'Berry Burst Bonanza',
    'Velvet Dream Delight'
  ];

  recentViews = [
    { name: 'Chocolate Chip Cascade', category: 'Cookies', price: 20, image: '~/images/cookie.jpg' },
    { name: 'Choco Bliss Cupcakes', category: 'Cup Cake', price: 22, image: '~/images/cupcake.jpg' },
    { name: 'Strawberry Fields Frosted', category: 'Donut', price: 25, image: '~/images/donut.jpg' },
    { name: 'Chocolate Caramel Donuts', category: 'Donut', price: 16, image: '~/images/donut2.jpg' },
  ];
}
