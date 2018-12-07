import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeReportFaultFormPage } from './employee-report-fault-form';

@NgModule({
  declarations: [
    EmployeeReportFaultFormPage,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeReportFaultFormPage),
  ],
})
export class EmployeeReportFaultFormPageModule {}
