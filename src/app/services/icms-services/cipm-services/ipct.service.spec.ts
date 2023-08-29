import { TestBed } from '@angular/core/testing';
import { IPCTService } from './ipct.service';


describe('IPCTService', () => {
  let service: IPCTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IPCTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
