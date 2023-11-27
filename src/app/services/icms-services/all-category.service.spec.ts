import { TestBed } from '@angular/core/testing';

import { AllCategoryService } from './all-category.service';

describe('AllCategoryService', () => {
  let service: AllCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
