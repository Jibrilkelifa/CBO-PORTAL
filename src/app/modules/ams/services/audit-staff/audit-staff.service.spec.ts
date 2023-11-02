import { TestBed } from '@angular/core/testing';

import { AuditStaffService } from './audit-staff.service';

describe('AuditStaffService', () => {
  let service: AuditStaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditStaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
