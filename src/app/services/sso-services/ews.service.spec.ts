import { TestBed } from '@angular/core/testing';

import { Ews } from './ews.service';

describe('ADUserService', () => {
  let service: Ews;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ews);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
