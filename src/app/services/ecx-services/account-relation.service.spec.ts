import { TestBed } from '@angular/core/testing';

import { AccountRelationService } from './account-relation.service';

describe('AccountRelationService', () => {
  let service: AccountRelationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountRelationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
