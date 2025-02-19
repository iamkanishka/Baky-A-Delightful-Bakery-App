 
import { Component, ElementRef, ViewChild, AfterViewInit} from "@angular/core";
import { Screen, ScrollView } from "@nativescript/core";

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

  @ViewChild('container', { static: false }) container!: ElementRef;

  ngAfterViewInit() {
    const nativeView = this.container.nativeElement;
    const totalWidth = nativeView.getActualSize().width;
    const paddingLeft = nativeView.style.paddingLeft || 0;
    const paddingRight = nativeView.style.paddingRight || 0;

    const availableWidth = totalWidth - paddingLeft - paddingRight;
    console.log('Available Width:', availableWidth);
  }

}
