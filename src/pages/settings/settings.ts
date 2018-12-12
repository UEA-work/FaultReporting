import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  selectedLanguage: any = null;
  languages = [
    {
      id: 0,
      language: "English"
    },
    {
      id: 1,
      language: "French"
    },
    {
      id: 2,
      language: "Germen"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  setLanguage() {
    console.log("Choosen Language" + this.selectedLanguage.language);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SettingsPage");
  }
}
