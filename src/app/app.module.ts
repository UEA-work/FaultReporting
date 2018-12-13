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

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserServiceProvider } from '../providers/user-service/user-service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

export const firebaseConfig = {
  apiKey: "AIzaSyAtF_Ia0-uV49Sf2aM7qZ6zo23pcVX-xWs",
  authDomain: "faultreporting-e676e.firebaseapp.com",
  databaseURL: "https://faultreporting-e676e.firebaseio.com",
  storageBucket: "faultreporting-e676e.appspot.com",
  messagingSenderId: '642056724185' 
};

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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
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
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserServiceProvider
  ]
})
export class AppModule {}
