import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";

@Component({
  selector: "app-catergories",
  templateUrl: "./catergories.component.html",
  styleUrl: "./catergories.component.scss",
})
export class CatergoriesComponent {
  constructor(private routerExtensions: RouterExtensions) {  }

  goBack(): void {
    if (this.routerExtensions.canGoBack()) {
      this.routerExtensions.back();
    } else {
      console.log('No previous page in the stack.');
    }
  }
}
