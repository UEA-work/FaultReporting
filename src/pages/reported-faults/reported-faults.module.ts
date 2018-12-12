import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportedFaultsPage } from './reported-faults';

@NgModule({
  declarations: [
    ReportedFaultsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportedFaultsPage),
  ],
})
export class ReportedFaultsPageModule {}
