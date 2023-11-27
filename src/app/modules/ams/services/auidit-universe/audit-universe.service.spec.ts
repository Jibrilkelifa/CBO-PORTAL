import { TestBed } from '@angular/core/testing';

import { AuditUniverseService } from './audit-universe.service';

describe('AnnualPlanService', () => {
  let service: AuditUniverseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditUniverseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
