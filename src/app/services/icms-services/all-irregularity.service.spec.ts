import { TestBed } from '@angular/core/testing';

import { AllIrregularityService } from './all-irregularity.service';

describe('AllIrregularityService', () => {
  let service: AllIrregularityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllIrregularityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
