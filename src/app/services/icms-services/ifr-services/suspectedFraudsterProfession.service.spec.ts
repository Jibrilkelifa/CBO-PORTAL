import { TestBed } from '@angular/core/testing';

import { SuspectedFraudsterProfessionService } from './suspectedFraudsterProfession.service';

describe('SuspectedFraudsterProfessionService', () => {
  let service: SuspectedFraudsterProfessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuspectedFraudsterProfessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
