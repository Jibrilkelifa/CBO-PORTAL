import { TestBed } from '@angular/core/testing';

import { AuditProgramService } from './audit-program.service';

describe('AuditProgramService', () => {
  let service: AuditProgramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditProgramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
