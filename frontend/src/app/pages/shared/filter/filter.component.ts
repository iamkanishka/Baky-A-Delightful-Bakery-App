import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {


  location = 'New York, USA';
  categories = ['ALL', 'Cup Cake', 'Cookies', 'Donuts'];
  selectedCategory = 'ALL';
  priceRange = { min: 10, max: 40 };
  reviews = [
    { label: '4.5 and above', stars: 5, selected: true },
    { label: '4.0 - 4.5', stars: 4, selected: false },
    { label: '3.5 - 4.0', stars: 3.5, selected: false },
    { label: '3.0 - 3.5', stars: 3, selected: false },
    { label: '2.5 - 3.0', stars: 2.5, selected: false },
  ];
  sortOptions = ['ALL', 'Popular', 'Near by', 'Price'];
  selectedSort = 'ALL';

  onCategorySelect(category: string) {
    this.selectedCategory = category;
  }

  onSortSelect(sort: string) {
    this.selectedSort = sort;
  }

  onReviewSelect(review: any) {
    this.reviews.forEach(r => (r.selected = false));
    review.selected = true;
  }

}
