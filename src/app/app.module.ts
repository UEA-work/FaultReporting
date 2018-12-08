import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { HelloIonicPage } from "../pages/hello-ionic/hello-ionic";
import { ItemDetailsPage } from "../pages/item-details/item-details";
import { ListPage } from "../pages/list/list";
import { ReportFormPage } from "../pages/report-form/report-form";
import { ReportFaultHomePage } from "../pages/report-fault-home/report-fault-home";
import { EmployeeLoginPage } from "../pages/employee-login/employee-login";
import { EmployeeReportFaultFormPage } from "../pages/employee-report-fault-form/employee-report-fault-form";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Camera } from "@ionic-native/camera";
import { SelectSearchableModule } from "ionic-select-searchable";

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ReportFormPage,
    ReportFaultHomePage,
    EmployeeLoginPage,
    EmployeeReportFaultFormPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), SelectSearchableModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ReportFormPage,
    ReportFaultHomePage,
    EmployeeLoginPage,
    EmployeeReportFaultFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
