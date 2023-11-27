import { TestBed } from '@angular/core/testing';

import { AnnualPlanService } from './annual-plan.service';

describe('AnnualPlanService', () => {
  let service: AnnualPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnualPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
