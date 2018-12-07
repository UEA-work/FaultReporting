import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ReportFaultHomePage } from "../report-fault-home/report-fault-home";

/**
 * Generated class for the EmployeeReportFaultFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-employee-report-fault-form",
  templateUrl: "employee-report-fault-form.html"
})
export class EmployeeReportFaultFormPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  submit() {
    this.navCtrl.push(ReportFaultHomePage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EmployeeReportFaultFormPage");
  }
}
