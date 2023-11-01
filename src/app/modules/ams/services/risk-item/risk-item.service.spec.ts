import { TestBed } from '@angular/core/testing';

import { RiskItemService } from './risk-item.service';

describe('RiskItemService', () => {
  let service: RiskItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
