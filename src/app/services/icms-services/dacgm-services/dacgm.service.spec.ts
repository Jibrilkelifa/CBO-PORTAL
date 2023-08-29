import { TestBed } from '@angular/core/testing';
import { DACGMService } from './dacgm.service';


describe('DACGMService', () => {
  let service: DACGMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DACGMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
