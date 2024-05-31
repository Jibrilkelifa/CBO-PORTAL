import { TestBed } from '@angular/core/testing';

import {  ProcurementService } from './procurement-services.service';

describe('ShareService', () => {
  let service: ProcurementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcurementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
