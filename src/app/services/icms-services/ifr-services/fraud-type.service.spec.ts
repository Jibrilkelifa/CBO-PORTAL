import { TestBed } from '@angular/core/testing';

import { FraudTypeService } from './fraud-type.service';

describe('FraudTypeService', () => {
  let service: FraudTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraudTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
