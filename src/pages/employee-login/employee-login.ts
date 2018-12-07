import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { EmployeeReportFaultFormPage } from "../employee-report-fault-form/employee-report-fault-form";

/**
 * Generated class for the EmployeeLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-employee-login",
  templateUrl: "employee-login.html"
})
export class EmployeeLoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  employeeLogin() {
    this.navCtrl.push(EmployeeReportFaultFormPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EmployeeLoginPage");
  }
}
