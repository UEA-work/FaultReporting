import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HelloIonicPage } from "../pages/hello-ionic/hello-ionic";
import { ItemDetailsPage } from "../pages/item-details/item-details";

import { ReportFormPage } from "../pages/report-form/report-form";
import { ReportFaultHomePage } from "../pages/report-fault-home/report-fault-home";
import { EmployeeLoginPage } from "../pages/employee-login/employee-login";
import { EmployeeReportFaultFormPage } from "../pages/employee-report-fault-form/employee-report-fault-form";
import { SettingsPage } from "../pages/settings/settings";
import { ReportedFaultsPage } from "../pages/reported-faults/reported-faults";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Camera } from "@ionic-native/camera";
import { SelectSearchableModule } from "ionic-select-searchable";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClientModule, HttpClient } from "@angular/common/http";

import { IonicStorageModule } from "@ionic/storage";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ReportFormPage,
    ReportFaultHomePage,
    EmployeeLoginPage,
    EmployeeReportFaultFormPage,
    SettingsPage,
    ReportedFaultsPage
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    SelectSearchableModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ReportFormPage,
    ReportFaultHomePage,
    EmployeeLoginPage,
    EmployeeReportFaultFormPage,
    SettingsPage,
    ReportedFaultsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
