import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";

import { HelloIonicPage } from "../hello-ionic/hello-ionic";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { ReportFaultHomePage } from "../report-fault-home/report-fault-home";
import { SelectSearchableComponent } from "ionic-select-searchable";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@IonicPage()
@Component({
  selector: "page-report-form",
  templateUrl: "report-form.html"
})
export class ReportFormPage {
  reportFaultForm: FormGroup;
  faultPhoto: any;
  selectedCategoryType: any = null;
  //coachInfo: any = null;

  selectedCommonFault: any = null;
  // commonFault: any = null;
  faultForm: any = null;
  myDate: any = null;

  faultType: any;
  category: any;
  commonFault: any;
  description: any;
  journeyInfo: any;
  journeyTimeAndDate: any;
  coachNumber: any;
  coachType: any;
  seatNumber: number;
  email: any;

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
    public navParams: NavParams
  ) {
    this.reportFaultForm = this.formBuilder.group({
      faultType: ["", Validators.required],
      category: ["", [Validators.required]],
      commonFault: [""],
      description: [""],
      journeyInfo: ["", [Validators.required]],
      journeyTimeAndDate: ["", [Validators.required]],
      coachInfo: ["", [Validators.required]],
      seatNumber: ["", [Validators.required]],
      email: ["", [Validators.pattern(".+@.+..+")]]
    });
  }

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
    this.commonFault = this.reportFaultForm.controls.commonFault.value.commonFaultOption;

    if (this.commonFault != "Other") {
      this.description = null;
    }
    console.log("common fault " + this.commonFault);
  }
  selectedCoach() {
    console.log("in selectedCoach function ");

    this.coachType = this.reportFaultForm.controls.coachInfo.value.coachType;
  }

  selectedCategoryTrain() {
    console.log("in selectedCategory function ");
    // console.log(this.selectedCategoryType);
    this.category = this.reportFaultForm.controls.category.value.categoryOption;
    console.log("selectedCategoryType value", this.category);
  }
  selectedFault() {
    this.category = null;
    this.faultType = this.reportFaultForm.controls.faultType.value.faultType;
    console.log("Selected Fault type is ", this.faultType);
  }

  submit() {
    this.faultType = this.reportFaultForm.controls.faultType.value.faultType;
    this.category = this.reportFaultForm.controls.category.value.categoryOption;
    this.commonFault = this.reportFaultForm.controls.commonFault.value.commonFaultOption;
    this.description = this.reportFaultForm.controls.description.value;
    this.email = this.reportFaultForm.controls.email.value;
    this.seatNumber = this.reportFaultForm.controls.seatNumber.value;
    this.coachNumber = this.reportFaultForm.controls.coachInfo.value.coachNumber;
    this.coachType = this.reportFaultForm.controls.coachInfo.value.coachType;
    this.journeyTimeAndDate = this.reportFaultForm.controls.journeyTimeAndDate.value;
    this.journeyInfo = this.reportFaultForm.controls.journeyInfo.value.journeyInfoOption;

    console.log(
      "in submit() FaultType " +
        this.reportFaultForm.controls.faultType.value.faultType
    );
    console.log(
      "in submit() category " +
        this.reportFaultForm.controls.category.value.categoryOption
    );
    console.log(
      "in submit() commonFaultValue " +
        this.reportFaultForm.controls.commonFault.value.commonFaultOption
    );

    console.log(
      "in submit() description " +
        this.reportFaultForm.controls.description.value
    );
    console.log("in submit() this.journeyInfo" + this.journeyInfo);
    console.log(
      "in submit() journeyTimeAndDate " +
        this.reportFaultForm.controls.journeyTimeAndDate.value
    );
    console.log(
      "in submit() coachInfo " +
        this.reportFaultForm.controls.coachInfo.value.coachNumber
    );
    console.log(
      "in submit() coachInfo " +
        this.reportFaultForm.controls.coachInfo.value.coachType
    );
    console.log(
      "in submit() seatNumber " + this.reportFaultForm.controls.seatNumber.value
    );
    console.log(
      "in submit() email " + this.reportFaultForm.controls.email.value
    );

    //this.navCtrl.push(ReportFaultHomePage);
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
