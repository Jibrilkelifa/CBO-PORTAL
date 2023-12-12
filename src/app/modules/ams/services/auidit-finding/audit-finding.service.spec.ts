import { TestBed } from '@angular/core/testing';

import { AuditFindingService } from './audit-finding.service';

describe('AuditFindingService', () => {
  let service: AuditFindingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditFindingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
