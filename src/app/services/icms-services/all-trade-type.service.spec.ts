import { TestBed } from '@angular/core/testing';

import { AllTradeTypeService } from './all-trade-type.service';

describe('AllCategoryService', () => {
  let service: AllTradeTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllTradeTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
