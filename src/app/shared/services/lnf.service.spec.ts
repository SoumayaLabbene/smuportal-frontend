import { TestBed } from '@angular/core/testing';

import { LnfService } from './lnf.service';

describe('LnfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LnfService = TestBed.get(LnfService);
    expect(service).toBeTruthy();
  });
});
