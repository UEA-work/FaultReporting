import { Component, ViewChild } from "@angular/core";

import { Platform, MenuController, Nav } from "ionic-angular";

import { HelloIonicPage } from "../pages/hello-ionic/hello-ionic";
import { ListPage } from "../pages/list/list";
import { ReportFormPage } from "../pages/report-form/report-form";
import { ReportFaultHomePage } from "../pages/report-fault-home/report-fault-home";
import { EmployeeLoginPage } from "../pages/employee-login/employee-login";
import { EmployeeReportFaultFormPage } from "../pages/employee-report-fault-form/employee-report-fault-form";
import { SettingsPage } from "../pages/settings/settings";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { TranslateService } from "@ngx-translate/core";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav)
  nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = ReportFaultHomePage;
  pages: Array<{ title: string; component: any; icon: String }>;
  icons: string[];

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public translate: TranslateService
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      //{ title: "Hello Ionic", component: HelloIonicPage },
      { title: "Home", component: ReportFaultHomePage, icon: "home" },
      { title: "Reported Faults", component: ListPage, icon: "albums" },
      { title: "Report Fault", component: HelloIonicPage, icon: "create" },
      { title: "Settings", component: SettingsPage, icon: "settings" },
      { title: "Sign Out", component: ReportFaultHomePage, icon: "log-out" }
    ];
  }

  initializeApp() {
    this.translate.setDefaultLang("en");

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
