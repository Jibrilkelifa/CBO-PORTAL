import { TestBed } from '@angular/core/testing';

import { JTAService } from './jta-services.service';

describe('JTAService', () => {
  let service: JTAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JTAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
