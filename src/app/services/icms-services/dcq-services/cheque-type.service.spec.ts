import { TestBed } from '@angular/core/testing';
import { ChequeTypeService } from './cheque-type.service';

describe('ChequeTypeService', () => {
  let service: ChequeTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChequeTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
