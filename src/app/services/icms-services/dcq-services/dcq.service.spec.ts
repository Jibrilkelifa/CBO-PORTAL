import { TestBed } from '@angular/core/testing';

import { DCQService } from './DCQ.service';

describe('CIPMService', () => {
  let service: DCQService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DCQService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
