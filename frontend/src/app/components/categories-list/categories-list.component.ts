import { Component, Input } from "@angular/core";
import { Categories } from "../../types/home/categories/index";
import { Router } from "@angular/router";

@Component({
  selector: "app-categories-list",
  templateUrl: "./categories-list.component.html",
  styleUrl: "./categories-list.component.scss",
})
export class CategoriesListComponent {
  @Input() categoriesQT: number = 12;

  categories: Categories = [
    {
      labelText: "Cup Cake",
      categroyImageURL:
        "https://img.icons8.com/?size=100&id=4mdJMAafisX4&format=png&color=000000",
    },
    {
      labelText: "Cookie",
      categroyImageURL:
        "https://img.icons8.com/?size=100&id=Eq5aUzFk6RKG&format=png&color=000000",
    },
    {
      labelText: "Donut",
      categroyImageURL:
        "https://img.icons8.com/?size=100&id=SS1cK4TzAfmm&format=png&color=000000",
    },
    {
      labelText: "Bread",
      categroyImageURL:
        "https://img.icons8.com/?size=100&id=4eZuUUJmJdVX&format=png&color=000000",
    },
    {
      labelText: "Pastry",
      categroyImageURL:
        "https://img.icons8.com/?size=100&id=97331&format=png&color=000000",
    },
    {
      labelText: "Sweet",
      categroyImageURL:
        "https://img.icons8.com/?size=100&id=1ah0CsFaUdJb&format=png&color=000000",
    },
    {
      labelText: "Choclate",
      categroyImageURL:
        "https://img.icons8.com/?size=100&id=38079&format=png&color=000000",
    },
    {
      labelText: "Muffin",
      categroyImageURL:
        "https://img.icons8.com/?size=100&id=35784&format=png&color=000000",
    },
    {
      labelText: "Cake",
      categroyImageURL:
        "https://img.icons8.com/?size=100&id=107438&format=png&color=000000",
    },
    {
      labelText: "Cinnamon roll",
      categroyImageURL:
        "https://img.icons8.com/?size=100&id=12872&format=png&color=000000",
    },
    {
      labelText: "Croissant",
      categroyImageURL:
        "https://img.icons8.com/?size=100&id=36769&format=png&color=000000",
    },
    {
      labelText: "Sandwich",
      categroyImageURL:
        "https://img.icons8.com/?size=100&id=HwIEsEmuCUlw&format=png&color=000000",
    },
  ];

  constructor( private router: Router) {  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.categories = this.categories.slice(0, this.categoriesQT);
  }

  public naviagteToCategories() {
    this.router.navigate([
      "/tabs",
      { outlets: { homeTab: ["home", "categories"] } },
    ]);
  }

}
