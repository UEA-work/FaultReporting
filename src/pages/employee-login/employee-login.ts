import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { EmployeeReportFaultFormPage } from "../employee-report-fault-form/employee-report-fault-form";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
      email: ["", [Validators.pattern(".+@.+..+"), Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  employeeLogin(): void {
    console.log("SignInPage: onSignIn()");
    if (this.credentialsForm.valid) {
      console.log("employeeLogin() => inside IF statement ");
    }

    console.log(
      "in employeeLogin() " + this.credentialsForm.controls.email.value
    );
    this.navCtrl.setRoot(EmployeeReportFaultFormPage);
  }
  onForgotPassword() {}
  clear() {
    this.credentialsForm.reset();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EmployeeLoginPage");
  }
}
