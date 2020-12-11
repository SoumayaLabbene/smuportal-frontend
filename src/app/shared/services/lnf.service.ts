import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, of } from 'rxjs';
import {report} from '../models/report.model'

@Injectable({
  providedIn: 'root'
})
export class LnfService {
  constructor(private httpClient: HttpClient) { }

  reportCalls: BehaviorSubject<report[]> = new BehaviorSubject<report[]>([]);


  DisplayReportcalls(): Observable<report[]> {
    return this.httpClient.get<report[]>("http://localhost:3000/api/user/DisplayReportcalls");
  }

  addReportcall(report: report): void {
    this.httpClient.post<any>("http://localhost:3000/api/user/addReportcall", report)
      .subscribe({
        next: (data: any) => {
         this.addNewReportcall(report);
         console.log(data);
        },
        error: (data: any) => console.warn(data)
      })
 }

 private addNewReportcall(report: report) {
   const reports: report[] = this.reportCalls.getValue();
   reports.push(report);
   this.reportCalls.next(reports);
 }

 deleteReportcall(reporttitle: string): void {
  this.httpClient.delete<any>(`http://localhost:3000/api/user/deleteReportcall/${reporttitle}`).subscribe({
   next: (data: any) => {
     console.log(data);
     this.deleteReportcallBytitle(reporttitle);
   },
   error: (data: any) => console.log(data)

 })
}

private deleteReportcallBytitle(reporttitle: string) {
 const reports: report[] = this.reportCalls.getValue();
 reports.forEach((report, index) => {
   if(report.Title === reporttitle) {reports.splice(index, 1);}
 })
 this.reportCalls.next(reports);
}
}
