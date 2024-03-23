import { TestBed } from '@angular/core/testing';

import { FireExtinguisherService } from './fireExtinguisher-services.service';

describe('FireExtinguisherService', () => {
  let service: FireExtinguisherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireExtinguisherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
