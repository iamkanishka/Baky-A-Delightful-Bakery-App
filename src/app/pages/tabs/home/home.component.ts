import { Page } from "@nativescript/core";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { Screen, ScrollView } from "@nativescript/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  constructor(private _page: Page, private router: Router) {
    this._page.actionBarHidden = true;
  }

  @ViewChild("carouselScrollView", { static: false })
  scrollViewRef!: ElementRef;

  items = [
    { text: 'Slide 1', imgURL: "https://iili.io/2yfv1Eu.png" },
    { text: 'Slide 2', imgURL: "https://iili.io/2yf8f3b.png" },
    { text: 'Slide 3', imgURL: "https://iili.io/2yfg2nI.jpg" },
    { text: 'Slide 4', imgURL: "https://iili.io/2yfg0wQ.md.jpg" }
  ];
  screenWidth: number = Screen.mainScreen.widthDIPs;
  currentIndex = 0;

  ngOnInit() {
    setInterval(() => this.nextSlide(), 3000); // Auto-slide every 3 seconds
  }

  nextSlide() {
    if (!this.scrollViewRef) return;

    const scrollView = this.scrollViewRef.nativeElement as ScrollView;
    this.currentIndex = (this.currentIndex + 1) % this.items.length;

    scrollView.scrollToHorizontalOffset(
      this.currentIndex * this.screenWidth,
      true
    );
  }

  onScroll(event: any) {
    const scrollView = this.scrollViewRef.nativeElement as ScrollView;
    this.currentIndex = Math.round(
      scrollView.horizontalOffset / this.screenWidth
    );
  }

  public naviagteToCategories() {
    this.router.navigate([
      "/tabs",
      { outlets: { homeTab: ["home", "categories"] } },
    ]);
  }
}
