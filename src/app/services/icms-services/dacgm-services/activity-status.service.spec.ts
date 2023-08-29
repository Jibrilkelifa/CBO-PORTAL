import { TestBed } from '@angular/core/testing';
import { ActivityStatusService } from './activity-status.service';


describe('DACGMService', () => {
  let service: ActivityStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
