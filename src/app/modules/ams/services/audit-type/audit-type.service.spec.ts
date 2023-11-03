import { TestBed } from '@angular/core/testing';

import { AuditTypeService } from './audit-type.service';

describe('AuditTypeService', () => {
  let service: AuditTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
