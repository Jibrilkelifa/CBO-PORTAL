import { TestBed } from '@angular/core/testing';

import { AuditEngagementService } from './audit-report.service';

describe('AuditEngagementService', () => {
  let service: AuditEngagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditEngagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
