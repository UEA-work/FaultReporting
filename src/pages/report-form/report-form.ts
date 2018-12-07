import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { HelloIonicPage } from "../hello-ionic/hello-ionic";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { ReportFaultHomePage } from "../report-fault-home/report-fault-home";

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
  faultPhoto: any;

  constructor(
    private camera: Camera,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {}
  /*
  takePhoto() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.faultPhoto = "data:image/jpeg;base64," + imageData;
      },
      err => {
        // Handle error
        console.log("Camera issue:" + err);
      }
    );
  } 
*/
  submit() {
    this.navCtrl.push(ReportFaultHomePage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReportFormPage");
  }
}
