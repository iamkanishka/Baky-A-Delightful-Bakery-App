import { Page } from "@nativescript/core";
import { Component, ElementRef, ViewChild } from '@angular/core'
import { Screen, ScrollView } from '@nativescript/core';

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]

})
export class HomeComponent {
  constructor(private _page: Page) {
    console.log("HomeComponent");
    
    this._page.actionBarHidden = true;
  }


  @ViewChild('carouselScrollView', { static: false }) scrollViewRef!: ElementRef;
  
  items = [
    { text: 'Slide 1', imgURL: "https://pouch.jumpshare.com/preview/E1KCYSQQ_JsWlMDRsbkdk5M2UF3YUATW5w8y97Z2C2kG-hQuO1ip_98MrI34tY8yo6Q_bgNmGL9FHGdaZ30sz4Xn7NBQesh8dm22gE79fxQ" },
    { text: 'Slide 2', imgURL: "https://pouch.jumpshare.com/preview/QnvRO-qw3FfXJ2XgWyUQKn-LDO1uc4k8YFfAMWMV0N7quVP_JAsoFYPxvsK9_Bifhm4VH659AMzA1kAoJp1RRTm7DUNrLs3P9wmQ9sIfW40" },
    { text: 'Slide 3', imgURL: "https://pouch.jumpshare.com/preview/UR34CtrKac79yQDQX7kEtPTnPLCa-mPRm8S7r7mP1Zc4JSyrz9N-Vb8t5dDSAbKio6Q_bgNmGL9FHGdaZ30sz57OThsvfocR_2rsbJ8qqOk" },
    { text: 'Slide 4', imgURL: "https://iili.io/2pgQyWg.png" }
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
    
    scrollView.scrollToHorizontalOffset(this.currentIndex * this.screenWidth, true);
  }

  onScroll(event: any) {
    const scrollView = this.scrollViewRef.nativeElement as ScrollView;
    this.currentIndex = Math.round(scrollView.horizontalOffset / this.screenWidth);
  }

}
