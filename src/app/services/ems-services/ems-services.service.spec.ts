import { TestBed } from '@angular/core/testing';

import {  EMSService } from './ems-services.service';

describe('EMSService', () => {
  let service: EMSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EMSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
