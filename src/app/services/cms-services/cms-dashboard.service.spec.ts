import { TestBed } from '@angular/core/testing';

import { CMSDashboardService } from './cms-dashboard.service';

describe('CMSDashboardService', () => {
  let service: CMSDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CMSDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
