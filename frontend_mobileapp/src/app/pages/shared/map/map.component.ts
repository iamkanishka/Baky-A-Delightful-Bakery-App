import { Component } from "@angular/core";
import { NativeScriptCommonModule } from '@nativescript/angular';
import { GoogleMapsModule } from '@nativescript/google-maps/angular'

@Component({
  selector: "app-map",
  standalone: true,
  imports: [NativeScriptCommonModule, GoogleMapsModule],
  templateUrl: "./map.component.html",
  styleUrl: "./map.component.scss",
})
export class MapComponent {}
