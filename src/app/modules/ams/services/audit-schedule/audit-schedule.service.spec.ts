import { TestBed } from '@angular/core/testing';

import { AuditScheduleService } from './audit-schedule.service';

describe('AuditScheduleService', () => {
  let service: AuditScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
