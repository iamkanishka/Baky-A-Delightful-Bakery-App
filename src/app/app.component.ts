import { Component, ElementRef, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Color, Page, TabView } from "@nativescript/core";
 
import { Application, isAndroid, isIOS } from "@nativescript/core";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})
export class AppComponent  {
  @ViewChild("tabViewRef", { static: false }) tabView!: ElementRef<TabView>;

  constructor(){}
 

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    if (isAndroid) {
      const window = Application.android.startActivity.getWindow();
      window.setStatusBarColor(android.graphics.Color.parseColor("#8B4513")); // Brown color for bakery theme
    }
    
  }


  
}
