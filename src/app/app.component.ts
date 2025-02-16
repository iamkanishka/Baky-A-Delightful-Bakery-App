import { Component, ElementRef, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Color, TabView } from "@nativescript/core";
 
import { Application, isAndroid, isIOS } from "@nativescript/core";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})
export class AppComponent  {
  @ViewChild("tabViewRef", { static: false }) tabView!: ElementRef<TabView>;

  constructor(private route: ActivatedRoute) {
  console.log('Tabs Component constructor');

  console.log(this.route);
  
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    if (isAndroid) {
      const window = Application.android.startActivity.getWindow();
      window.setStatusBarColor(android.graphics.Color.parseColor("#8B4513")); // Brown color for bakery theme
    }
    
  }

  selectedIndex = 0;

  onTabChange(event: any) {
    this.selectedIndex = event.value;
  }

  ngAfterViewInit() {
    if (this.tabView) {
      const nativeTabView = this.tabView.nativeElement;
      nativeTabView.selectedTabTextColor = new Color("#8B4513"); // Active Tab Title Color
      nativeTabView.tabTextColor = new Color("black"); // Inactive Tab Title Color
      nativeTabView.tabTextFontSize = 10; // Tab Title Font Size

      nativeTabView.backgroundColor = new Color("white"); // Tab Background Color
    }
  }
  
}
