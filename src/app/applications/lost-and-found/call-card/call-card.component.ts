import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import {LnfService} from "@app/shared/services";
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'report-call-card',
  templateUrl: './call-card.component.html',
  styleUrls: ['./call-card.component.css']
})
export class CallCardComponent implements OnInit {
  @Input() Title: string;
  @Input() Details: string;
  @Input() Image: string;
  @Input() Contact: string;
  @Input() _id: string;
  
  reportRemoved: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public lnfService: LnfService, private router: Router) { }

  ngOnInit() {

    
  }
  deleteReportcall(reporttitle: string) {
    this.lnfService.deleteReportcall(reporttitle);
    this.reportRemoved.next(true);
    
  }

}
