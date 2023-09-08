import { TestBed } from '@angular/core/testing';

import { ADUserService } from './ad-user.service';

describe('ADUserService', () => {
  let service: ADUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ADUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
