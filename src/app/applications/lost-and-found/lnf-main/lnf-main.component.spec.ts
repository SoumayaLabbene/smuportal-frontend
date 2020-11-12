import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LnfMainComponent } from './lnf-main.component';

describe('LnfMainComponent', () => {
  let component: LnfMainComponent;
  let fixture: ComponentFixture<LnfMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LnfMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LnfMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
