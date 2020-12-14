import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LnfService } from '@app/shared';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lnf-add-report',
  templateUrl: './lnf-add-report.component.html',
  styleUrls: ['./lnf-add-report.component.css']
})
export class LnfAddReportComponent implements OnInit {
 callTypes: any = ["Report Call", "Claim Call"];
  reportForm;
  reportAdded: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private formBuilder: FormBuilder, private lnfService: LnfService,
   private router: Router) {
    this.reportForm = this.formBuilder.group({
      title: "",
      details: "",
      type: "",
    })
  }

  ngOnInit() {
   
  }

  onSubmit(report) {
    this.reportForm.reset();
    console.warn("Report Data:", report);
    this.lnfService.addReportcall(report);
    this.reportAdded.next(true);
  }

  goBack() {
    this.router.navigate(["/lnf"])
  }

}
