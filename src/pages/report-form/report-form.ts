import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { HelloIonicPage } from "../hello-ionic/hello-ionic";

/**
 * Generated class for the ReportFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-report-form",
  templateUrl: "report-form.html"
})
export class ReportFormPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {}

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: "Login",
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: "title",
          placeholder: "Title"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Save",
          handler: data => {
            console.log("Saved clicked");
          }
        }
      ]
    });
    prompt.present();
  }

  itemTapped(event, item) {
    this.navCtrl.push(HelloIonicPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReportFormPage");
  }
}
