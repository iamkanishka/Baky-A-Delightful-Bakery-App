 
 
import { Component, ElementRef, ViewChild } from "@angular/core";
import {
  Application,
  Device,
  Screen,
  EventData,
  Page,
  PinchGestureEventData,
  Image 
} from "@nativescript/core";

@Component({
  selector: 'app-explore',
 
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {
 

    @ViewChild('imageRef', { static: false }) imageRef!: ElementRef<Image>;
    constructor(private _page: Page) {
      this._page.actionBarHidden = true;
    }
  
    screenWidth:number = Screen.mainScreen.widthDIPs;
    screenHeight:number = Screen.mainScreen.heightDIPs;
    imageAspect:string = "fill";
    thumbnailWidth:number = 0;
    thumbnailHeight:number = 0;
    thumbnailBottomPadding:number = 0;
  
    private scale = 1; // Default scale
  
    coverImage:string="https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?cs=srgb&dl=pexels-zvolskiy-1721934.jpg"; 
  
   
    thumbnails = [
      "https://assets.winni.in/product/primary/2023/3/83221.jpeg",
      "https://www.fnp.com/images/pr/m/v300/black-forest-cake-half-kg.jpg",
      "https://www.shreemithai.com/cdn/shop/products/black-forest-cake-222028.jpg",
      "https://merakcakes.com/cdn/shop/files/VanillaChocoChipsCake.jpg",
      "https://c4.wallpaperflare.com/wallpaper/995/351/762/cake-4k-hd-top-wallpaper-preview.jpg",
    ];
    isPortrait: boolean = true;
    
  
    ngOnInit(): void {
      // Initial check for orientation
      this.checkOrientation();
  
      // Listen for orientation changes
      Application.on(
        Application.orientationChangedEvent,
        this.onOrientationChange,
        this
      );
    }
  
    ngOnDestroy(): void {
      // Remove listener when component is destroyed
      Application.off(
        Application.orientationChangedEvent,
        this.onOrientationChange,
        this
      );
    }
  
    checkOrientation(): void {
      this.isPortrait = this.screenHeight > this.screenWidth;
      this.thumbnailHeight =  this.screenHeight * 0.13;
      this.thumbnailWidth =  this.screenWidth * 0.90;
  
  
      this.imageAspect = this.isPortrait ? "aspectFit" : "aspectFit";
      this.thumbnailBottomPadding = this.isPortrait ? this.screenHeight * 0.05 : 0.03;
  
  
      console.log(
        `Current Orientation: ${this.isPortrait ? "Portrait" : "Landscape"}`
      );
    }
  
    onOrientationChange(args: EventData): void {
      this.checkOrientation();
    }
  
    enlargeThumbnailimage(thumbanilIndex: number){
      console.log(thumbanilIndex);
      
     this.coverImage = this.thumbnails[thumbanilIndex]   
    }
    
  
  
    onPinch(args: PinchGestureEventData): void {
      if (args.state === 1) {
        // When pinch starts, store the initial scale
        this.scale = this.imageRef.nativeElement.scaleX;
      } else if (args.state === 2) {
        // While pinching, update the scale
        const newScale = this.scale * args.scale;
        this.imageRef.nativeElement.scaleX = newScale;
        this.imageRef.nativeElement.scaleY = newScale;
      }
    }
  
    onDoubleTap(): void {
      this.imageRef.nativeElement.scaleX = 1;
      this.imageRef.nativeElement.scaleY = 1;
    }

}
