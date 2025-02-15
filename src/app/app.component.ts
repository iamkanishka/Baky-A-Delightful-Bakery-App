import { Component, ElementRef, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Color, TabView } from "@nativescript/core";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})
export class AppComponent {
 constructor(private route: ActivatedRoute) {
  console.log('AppComponent');

  console.log(this.route);
  
  }
  
}
