import { Component, ElementRef, ViewChild } from "@angular/core";
import { Color, TabView } from "@nativescript/core";

@Component({
  selector: "ns-app",
  templateUrl: "app.component.html",
})
export class TabsComponent {
  @ViewChild("tabViewRef", { static: false }) tabView!: ElementRef<TabView>;

  constructor() {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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
