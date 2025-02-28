import { Component } from '@angular/core';

@Component({
  selector: 'app-home-header',
 
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {
 

  onFilterTap() {
    console.log('Filter button clicked!');
    // Open filter modal or perform filtering logic here
  }
}
