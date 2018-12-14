import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import { MyApp } from "../../app/app.component";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
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
  settingsForm: FormGroup;
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public translate: TranslateService) {

    this.settingsForm = this.formBuilder.group({
      selectedLanguage: [""]
    });
    console.log("current Language" + this.translate.defaultLang);

    this.languages.forEach(element => {
      
      if(element.code == this.translate.defaultLang) 
      {
     //   this.settingsForm.controls.selectedLanguage = element;
       this.selectedLanguage = this.settingsForm.controls.selectedLanguage.value.language;
      }
   });
  }

  setLanguage() {
    console.log("Choosen Language" + this.selectedLanguage);

    this.selectedLanguage = this.settingsForm.controls.selectedLanguage.value.language;

    this.languages.forEach(element => {
      
       if(element.language == this.selectedLanguage) 
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
