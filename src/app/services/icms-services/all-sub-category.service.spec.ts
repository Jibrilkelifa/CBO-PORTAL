import { TestBed } from '@angular/core/testing';

import { AllSubCategoryService } from './all-sub-category.service';

describe('AllSubCategoryService', () => {
  let service: AllSubCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllSubCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
