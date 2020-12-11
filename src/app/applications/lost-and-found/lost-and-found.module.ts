import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LnfMainComponent } from './lnf-main/lnf-main.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {​​ RouterModule, Routes }​​ from "@angular/router";
import {​​ SharedModule }​​ from "@app/shared/shared.module";
import { ReportCallsComponent } from './report-calls/report-calls.component';
import { LnfAddReportComponent } from './lnf-add-report/lnf-add-report.component';
const routes: Routes = [
  {
    path:"", 
    component:LnfMainComponent
  },
  {
    path: "list",
    component: ReportCallsComponent
  },
  {
    path: "add",
    component: LnfAddReportComponent
  }
]

@NgModule({
  declarations: [LnfMainComponent, ReportCallsComponent, LnfAddReportComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LostAndFoundModule { }
