import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import { MyApp } from "../../app/app.component";
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  selectedLanguage: any = null;
  languages = [
    {
      id: 0,
      language: "English",
      code: "en"
    },
    {
      id: 1,
      language: "French",
      code: "fr"
    },
    {
      id: 2,
      language: "Spanish",
      code: "es"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams,  public translate: TranslateService) {

    console.log("current Language" + this.translate.defaultLang);

    this.languages.forEach(element => {
      
      if(element.code == this.translate.defaultLang) 
      {
   //     this.selectedLanguage.language = element.language;
      }
   });
  }

  setLanguage() {
    console.log("Choosen Language" + this.selectedLanguage.language);

    

    this.languages.forEach(element => {
      
       if(element.language == this.selectedLanguage.language) 
       {
        this.translate.use(element.code);
       
       }
    });
    this.navCtrl.push(MyApp);

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SettingsPage");
  }
}
