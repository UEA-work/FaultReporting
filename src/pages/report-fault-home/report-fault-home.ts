import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HelloIonicPage } from "../hello-ionic/hello-ionic";
import { EmployeeLoginPage } from "../employee-login/employee-login";

/**
 * Generated class for the ReportFaultHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-report-fault-home",
  templateUrl: "report-fault-home.html"
})
export class ReportFaultHomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  login() {
    console.log("in login()");
    this.navCtrl.push(EmployeeLoginPage);
  }
  reportFault() {
    this.navCtrl.push(HelloIonicPage);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad ReportFaultHomePage");
  }
}
