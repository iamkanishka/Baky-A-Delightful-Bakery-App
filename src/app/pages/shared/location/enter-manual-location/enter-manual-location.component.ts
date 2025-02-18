 
import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { LocationService } from '../service/location/location.service';


@Component({
  selector: 'app-enter-manual-location',
  
  templateUrl: './enter-manual-location.component.html',
  styleUrl: './enter-manual-location.component.scss'
})
export class EnterManualLocationComponent {
  searchQuery = '';
  searchResults = [];

  constructor(private router: RouterExtensions, private locationService: LocationService) {}

  goBack() {
    this.router.back();
  }

  onSearch() {
    if (this.searchQuery.trim() === '') {
      this.searchResults = [];
      return;
    }
    // this.searchResults = this.locationService.searchLocations(this.searchQuery);
  }

  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
  }

  useCurrentLocation() {
    this.locationService.getCurrentLocation().then(location => {
      console.log('Current location:', location);
    }).catch(err => console.error('Error fetching location', err));
  }

  selectLocation(event) {
    console.log('Selected location:', event.index, this.searchResults[event.index]);
  }
}
