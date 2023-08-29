import { TestBed } from '@angular/core/testing';

import { ECXServiceService } from './ecx-service.service';

describe('ECXServiceService', () => {
  let service: ECXServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ECXServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
