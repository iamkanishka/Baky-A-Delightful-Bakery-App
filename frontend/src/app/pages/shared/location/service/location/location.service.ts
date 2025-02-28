import { Injectable } from '@angular/core';
import { Location } from '@nativescript/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locations = [
    { name: 'Golden Avenue', address: '8502 Preston Rd, Ingleside' },
    { name: 'Silver Street', address: '1234 Elm St, Brooklyn' },
    { name: 'Diamond Plaza', address: '5678 Main St, Los Angeles' }
  ];

  constructor() {}

  /**
   * Simulate searching locations
   * @param query The search query
   * @returns Filtered location list
   */
  searchLocations(query: string) {
    return this.locations.filter(loc => loc.name.toLowerCase().includes(query.toLowerCase()));
  }

  /**
   * Fetch current location coordinates using Geolocation
   * @returns Promise with latitude and longitude
   */
  // async getCurrentLocation(): Promise<{ latitude: number; longitude: number }> {
  //   try {
  //     await Location.enableLocationRequest(); // Request location permissions
  //     const location = await Location.getCurrentLocation({ timeout: 5000 });
  //     return {
  //       latitude: location.latitude,
  //       longitude: location.longitude
  //     };
  //   } catch (error) {
  //     console.error('Error getting location:', error);
  //     throw error;
  //   }
  // }
   async getCurrentLocation() {}

}
