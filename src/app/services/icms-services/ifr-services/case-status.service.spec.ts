import { TestBed } from '@angular/core/testing';

import { CaseStatusService } from './case-status.service';

describe('CIPMService', () => {
  let service: CaseStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaseStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
