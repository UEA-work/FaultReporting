import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { AlertController } from "ionic-angular";
import { HelloIonicPage } from "../hello-ionic/hello-ionic";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { ReportFaultHomePage } from "../report-fault-home/report-fault-home";
import { SelectSearchableComponent } from "ionic-select-searchable";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

@IonicPage()
@Component({
  selector: "page-report-form",
  templateUrl: "report-form.html"
})
export class ReportFormPage {
  reportForm: FormGroup;
  faultPhoto: any;

  @ViewChild("myselect") selectComponent: SelectSearchableComponent;
  selectedFaultType: any = null;
  faultTypes = [
    {
      id: 0,
      faultType: "Train"
    },
    {
      id: 1,
      faultType: "Station"
    }
  ];
  categoryForTrain = [
    {
      id: 0,
      categoryOption: "Seat"
    },
    {
      id: 1,
      categoryOption: "Window"
    },
    {
      id: 2,
      categoryOption: "Toilet"
    },
    {
      id: 3,
      categoryOption: "Support handles"
    },
    {
      id: 4,
      categoryOption: "Door"
    }
  ];
  categoryForStation = [
    {
      id: 0,
      categoryOption: "Vending machine"
    },
    {
      id: 1,
      categoryOption: "Escalator"
    },
    {
      id: 2,
      categoryOption: "Toilet"
    },
    {
      id: 3,
      categoryOption: "Track"
    },
    {
      id: 4,
      categoryOption: "Ticket Machine"
    },
    {
      id: 5,
      categoryOption: "Cleaning"
    }
  ];
  users = [
    {
      id: 0,
      name: "Simon Grimm",
      country: "Germany"
    },
    {
      id: 1,
      name: "Max Lynch",
      country: "Wisconsin"
    },
    {
      id: 2,
      name: "Nic Raboy",
      country: "California"
    }
  ];

  constructor(
    public formBuilder: FormBuilder,
    private camera: Camera,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}
  
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

  selectedFault() {
    console.log("in Selected Fault function ");
    console.log(this.selectedFaultType);
    this.selectedFaultType = this.selectedFaultType.faultType;
    console.log("Ft value", this.selectedFaultType);
  }

  userChanged(event: { component: SelectSearchableComponent; value: any }) {
    // User was selected
  }

  onClose() {
    let toast = this.toastCtrl.create({
      message: "Thanks for your selection",
      duration: 2000
    });
    toast.present();
  }

  submit() {
    this.navCtrl.push(ReportFaultHomePage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReportFormPage");
  }
}
