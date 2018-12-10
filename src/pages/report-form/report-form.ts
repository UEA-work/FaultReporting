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
  selectedCategoryType: any = null;
  coachInfo: any = null;
  coachType: any = null;
  selectedCommonFault: any = null;
  commonFault: any = null;
  faultForm: any = null;

  @ViewChild("myselect") selectComponent: SelectSearchableComponent;
  selectedFaultType: any = null;

  /*/////////////////////////////FAULT TYPES/////////////////////////////////// */
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
  /*//////////////////Category Types based on fault type//////////////////////// */
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
  /*/////Common Faults depending on Category Types////// */
  /*/////Common Faults depending on Category Type *****TRAIN*****/
  /** Seat ** Window ** Toilet ** Support Handles ** Door **/
  seatCommonFaults = [
    {
      id: 0,
      commonFaultOption: "Broken Back"
    },
    {
      id: 1,
      commonFaultOption: "Broken head rest"
    },
    {
      id: 2,
      commonFaultOption: "Broken hand rest"
    },
    {
      id: 3,
      commonFaultOption: "Other"
    }
  ];
  windowCommonFaults = [
    {
      id: 0,
      commonFaultOption: "Cracked"
    },
    {
      id: 1,
      commonFaultOption: "Broken Frame"
    },
    {
      id: 2,
      commonFaultOption: "Lock Problem"
    },
    {
      id: 3,
      commonFaultOption: "Other"
    }
  ];
  toiletCommonFaults = [
    {
      id: 0,
      commonFaultOption: "Taps"
    },
    {
      id: 1,
      commonFaultOption: "Toilet Seat"
    },
    {
      id: 2,
      commonFaultOption: "Door"
    },
    {
      id: 3,
      commonFaultOption: "Other"
    }
  ];

  /**************Journey Informaation ***************** */
  journeyInfoList = [
    {
      id: 0,
      journeyInfoOption: "Norwich - Ipswich"
    },
    {
      id: 1,
      journeyInfoOption: "Ipswich - Norwich"
    },
    {
      id: 2,
      journeyInfoOption: "Norwich - London"
    },
    {
      id: 3,
      journeyInfoOption: "London - Norwich"
    },
    {
      id: 4,
      journeyInfoOption: "Ipswich - London"
    },
    {
      id: 5,
      journeyInfoOption: "London - Ipswich"
    }
  ];

  /****************Coach Information******************* */
  coachInfoList = [
    {
      id: 0,
      coachNumber: "57416",
      coachType: "rural"
    },
    {
      id: 1,
      coachNumber: "82143",
      coachType: "urban"
    },
    {
      id: 2,
      coachNumber: "12056",
      coachType: "urban"
    },
    {
      id: 3,
      coachNumber: "74456",
      coachType: "urban"
    },
    {
      id: 4,
      coachNumber: "12345",
      coachType: "rural"
    },
    {
      id: 5,
      coachNumber: "54321",
      coachType: "rural"
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
  checkCommonFault() {
    this.commonFault = this.selectedCommonFault.commonFaultOption;
    console.log(this.commonFault);
  }
  selectedCoach() {
    console.log("in selectedCoach function ");
    console.log(this.coachInfo);
    this.coachType = this.coachInfo.coachType;
    console.log("selected coach type is ", this.coachType);
    console.log("Ft value", this.selectedFaultType);
    console.log("selectedCategoryType value", this.selectedCategoryType);
  }

  selectedCategoryTrain() {
    console.log("in selectedCategory function ");
    console.log(this.selectedCategoryType);
    this.selectedCategoryType = this.selectedCategoryType.categoryOption;
    console.log("selectedCategoryType value", this.selectedCategoryType);
  }
  selectedFault() {
    this.selectedCategoryType = null;
    console.log("in Selected Fault function ");
    console.log(this.selectedFaultType);
    this.selectedFaultType = this.selectedFaultType.faultType;
    console.log("Ft value", this.selectedFaultType);
  }

  submit() {
    this.navCtrl.push(ReportFaultHomePage);
  }
  cancel() {
    this.navCtrl.push(ReportFaultHomePage);
  }
  reset() {
    this.navCtrl.push(ReportFormPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReportFormPage");
  }
}
