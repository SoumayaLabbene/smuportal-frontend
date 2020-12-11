import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LnfAddReportComponent } from './lnf-add-report.component';

describe('LnfAddReportComponent', () => {
  let component: LnfAddReportComponent;
  let fixture: ComponentFixture<LnfAddReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LnfAddReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LnfAddReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
