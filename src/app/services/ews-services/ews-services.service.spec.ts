import { TestBed } from '@angular/core/testing';

import {  EWSService } from './ews-services.service';

describe('EWSService', () => {
  let service: EWSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EWSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
