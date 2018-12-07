import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportFaultHomePage } from './report-fault-home';

@NgModule({
  declarations: [
    ReportFaultHomePage,
  ],
  imports: [
    IonicPageModule.forChild(ReportFaultHomePage),
  ],
})
export class ReportFaultHomePageModule {}
