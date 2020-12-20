import { Component, OnDestroy, OnInit } from '@angular/core';
import {LnfService} from "@app/shared/services";
import { report } from "@app/shared/models";
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-calls',
  templateUrl: './report-calls.component.html',
  styleUrls: ['./report-calls.component.css']
})
export class ReportCallsComponent implements OnInit, OnDestroy {
  reportCalls: BehaviorSubject<report[]> = new BehaviorSubject<report[]>([]);

  reportRemoved: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  constructor(public lnfService: LnfService, private router: Router) { }
  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.lnfService.DisplayReportcalls().subscribe({
      next: (data: report[]) => this.reportCalls.next(data),
      error: (data: any) => console.log(data)

    })
  }

  deleteReportcall(reporttitle: string) {
    this.lnfService.deleteReportcall(reporttitle);
    this.reportRemoved.next(true);
    
  }
  goToAdd() {
    console.log("clicked");
    
    this.router.navigate(["/lnf/add"]);
  }
}
