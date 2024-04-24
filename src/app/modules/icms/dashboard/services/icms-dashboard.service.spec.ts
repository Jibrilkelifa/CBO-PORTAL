import { TestBed } from '@angular/core/testing';

import { ICMSDashboardService } from './icms-dashboard.service';

describe('ICMSDashboardService', () => {
  let service: ICMSDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ICMSDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
