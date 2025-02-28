 
import { Component, ElementRef, ViewChild, AfterViewInit} from "@angular/core";
import { Screen } from "@nativescript/core";

@Component({
  selector: 'app-banner',
  
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent  implements AfterViewInit  {

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
  autoSlideInterval: any;

  ngAfterViewInit() {
    setTimeout(() => {
      this.screenWidth = this.scrollViewRef.nativeElement.getActualSize().width;
      this.startAutoSlide();
    }, 500);
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => this.nextSlide(), 3000);
  }

  stopAutoSlide() {
    clearInterval(this.autoSlideInterval);
  }

  nextSlide() {
    if (!this.scrollViewRef) return;

    const scrollView = this.scrollViewRef.nativeElement;
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back
    }

    scrollView.scrollToHorizontalOffset(this.currentIndex * this.screenWidth, true);
  }

  prevSlide() {
    if (!this.scrollViewRef) return;

    const scrollView = this.scrollViewRef.nativeElement;
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.items.length - 1;

    scrollView.scrollToHorizontalOffset(this.currentIndex * this.screenWidth, true);
  }

  onScroll(event: any) {
    const scrollView = this.scrollViewRef.nativeElement;
    this.currentIndex = Math.round(scrollView.horizontalOffset / this.screenWidth);
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  onSwipe(event: any) {
    if (event.direction === 1) {
      this.nextSlide();
    } else if (event.direction === 2) {
      this.prevSlide();
    }
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }
}
