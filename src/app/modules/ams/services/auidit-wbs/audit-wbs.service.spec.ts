import { TestBed } from '@angular/core/testing';

import { AuditWBSService } from './audit-wbs.service';

describe('AuditWBSService', () => {
  let service: AuditWBSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditWBSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
