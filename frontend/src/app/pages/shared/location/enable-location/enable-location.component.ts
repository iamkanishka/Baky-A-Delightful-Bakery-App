 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isEnabled, enableLocationRequest, getCurrentLocation, Location } from '@nativescript/geolocation';
 
@Component({
  selector: 'app-enable-location',
  
  templateUrl: './enable-location.component.html',
  styleUrl: './enable-location.component.scss'
})
export class EnableLocationComponent {

  constructor(private router: Router) {}

  ngOnInit() {}

  async getLocation() {
    try {
      const isLocationEnabled = await isEnabled();
      if (!isLocationEnabled) {
        await enableLocationRequest(true);
      }

      // const options: GeolocationOptions = { desiredAccuracy: 3, updateDistance: 10, maximumAge: 5000, timeout: 20000 };
      const options: any = { desiredAccuracy: 3, updateDistance: 10, maximumAge: 5000, timeout: 20000 };

      const location: Location = await getCurrentLocation(options);
      
      console.log("User Location:", location.latitude, location.longitude);
      // Navigate to the next page or update UI with location data
    } catch (error) {
      console.error("Error getting location:", error);
    }
  }

  enterLocationManually() {
    this.router.navigate(['/manual-location']);
  }


}
