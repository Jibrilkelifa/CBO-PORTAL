import { TestBed } from '@angular/core/testing';
import { TimeService } from './time.service';


describe('BranchService', () => {
  let service: TimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
