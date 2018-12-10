import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { EmployeeReportFaultFormPage } from "../employee-report-fault-form/employee-report-fault-form";
import { FormBuilder, FormGroup } from "@angular/forms";
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
  credentialsForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    public navParams: NavParams
  ) {
    this.credentialsForm = this.formBuilder.group({
      email: [""],
      password: [""]
    });
  }

  employeeLogin() {
    this.navCtrl.setRoot(EmployeeReportFaultFormPage);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EmployeeLoginPage");
  }
}
