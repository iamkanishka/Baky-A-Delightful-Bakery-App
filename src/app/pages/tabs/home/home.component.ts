import { Page } from "@nativescript/core";
import { Component} from "@angular/core";
 
import { Router } from "@angular/router";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  constructor(private _page: Page, private router: Router) {
    this._page.actionBarHidden = true;
  }

  public naviagteToCategories() {
    this.router.navigate([
      "/tabs",
      { outlets: { homeTab: ["home", "categories"] } },
    ]);
  }
}
