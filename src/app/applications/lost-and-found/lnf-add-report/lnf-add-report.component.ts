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
      reportImage: "",
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

  onFileSelected(event){
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      me.reportForm.patchValue({
        reportImage: reader.result
      })
    };
    reader.onerror = (err) => {console.error(err);
    }
  }

  goBack() {
    this.router.navigate(["/lnf"])
  }

}
