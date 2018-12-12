import { Component } from "@angular/core";

import { NavController, NavParams } from "ionic-angular";

import { ItemDetailsPage } from "../item-details/item-details";

@Component({
  selector: "page-list",
  templateUrl: "list.html"
})
export class ListPage {
  icons: string[];
  items: Array<{ title: string; note: string; icon: string }>;
  reportedFaultsList: Array<{
    id: number;
    coachNumber: number;
    coachType: String;
  }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = [
      "flask",
      "wifi",
      "beer",
      "football",
      "basketball",
      "paper-plane",
      "american-football",
      "boat",
      "bluetooth",
      "build"
    ];
    this.reportedFaultsList = [
      {
        id: 0,
        coachNumber: 57416,
        coachType: "rural"
      },
      {
        id: 1,
        coachNumber: 82143,
        coachType: "urban"
      },
      {
        id: 2,
        coachNumber: 12056,
        coachType: "urban"
      },
      {
        id: 3,
        coachNumber: 74456,
        coachType: "urban"
      },
      {
        id: 4,
        coachNumber: 12345,
        coachType: "rural"
      },
      {
        id: 5,
        coachNumber: 54321,
        coachType: "rural"
      }
    ];
    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: "Item " + i,
        note: "This is item #" + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
