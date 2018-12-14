import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { ItemDetailsPage } from "../item-details/item-details";
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ReportedFaultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-reported-faults",
  templateUrl: "reported-faults.html"
})
export class ReportedFaultsPage {
  reportedFaultsList: Array<{
    id: number;
    faultType: String;
    category: String;
    commonFault: String;
    journeyInfo: String;
    journeyTimeAndDate: any;
    coachNumber: number;
    coachType: String;
    seatNumber: number;
    status: String;
  }>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    
    // storage.set ("reportedfaults",JSON.stringify([
    //   {
    //     id: 0,
    //     faultType: "Train",
    //     category: "Seat",
    //     commonFault: "Broken Seat",
    //     journeyInfo: "Norwich to Ipswich",
    //     journeyTimeAndDate: "2018-12-12",
    //     coachNumber: 57416,
    //     coachType: "Urban",
    //     seatNumber: 23,
    //     status: "Reported"
    //   },
    //   {
    //     id: 1,
    //     faultType: "Train",
    //     category: "Seat",
    //     commonFault: "Broken Seat",
    //     journeyInfo: "Norwich to Ipswich",
    //     journeyTimeAndDate: "2018-12-12",
    //     coachNumber: 57416,
    //     coachType: "Urban",
    //     seatNumber: 23,
    //     status: "Scheduled"
    //   },
    //   {
    //     id: 2,
    //     faultType: "Train",
    //     category: "Seat",
    //     commonFault: "Broken Seat",
    //     journeyInfo: "Norwich to Ipswich",
    //     journeyTimeAndDate: "2018-12-12",
    //     coachNumber: 57416,
    //     coachType: "Urban",
    //     seatNumber: 23,
    //     status: "Reported"
    //   },
    //   {
    //     id: 3,
    //     faultType: "Train",
    //     category: "Seat",
    //     commonFault: "Broken Seat",
    //     journeyInfo: "Norwich to Ipswich",
    //     journeyTimeAndDate: "2018-12-12",
    //     coachNumber: 57416,
    //     coachType: "Urban",
    //     seatNumber: 23,
    //     status: "Done"
    //   },
    //   {
    //     id: 4,
    //     faultType: "Train",
    //     category: "Seat",
    //     commonFault: "Broken Seat",
    //     journeyInfo: "Norwich to Ipswich",
    //     journeyTimeAndDate: "2018-12-12",
    //     coachNumber: 57416,
    //     coachType: "Urban",
    //     seatNumber: 23,
    //     status: "Reported"
    //   },
    //   {
    //     id: 5,
    //     faultType: "Train",
    //     category: "Seat",
    //     commonFault: "Broken Seat",
    //     journeyInfo: "Norwich to Ipswich",
    //     journeyTimeAndDate: "2018-12-12",
    //     coachNumber: 57416,
    //     coachType: "Urban",
    //     seatNumber: 23,
    //     status: "Reported"
    //   }

    // ]))

    this.storage.get("reportedfaults").then( res => {
      this.reportedFaultsList = JSON.parse(res);
    });
 
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ReportedFaultsPage");
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
