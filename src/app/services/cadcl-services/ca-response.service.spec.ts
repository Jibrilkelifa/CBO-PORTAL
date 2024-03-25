import { TestBed } from '@angular/core/testing';

import { CaResponseService } from './ca-response.service';

describe('CaResponseService', () => {
  let service: CaResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
