import { TestBed } from '@angular/core/testing';

import { CIPMService } from './cipm.service';

describe('CIPMService', () => {
  let service: CIPMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CIPMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
