import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCallsComponent } from './report-calls.component';

describe('ReportCallsComponent', () => {
  let component: ReportCallsComponent;
  let fixture: ComponentFixture<ReportCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
