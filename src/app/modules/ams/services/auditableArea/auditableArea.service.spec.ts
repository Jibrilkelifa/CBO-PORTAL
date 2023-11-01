import { TestBed } from '@angular/core/testing';

import { AuditableAreasService } from './auditableArea.service';

describe('AuditableAreasService', () => {
  let service: AuditableAreasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditableAreasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
