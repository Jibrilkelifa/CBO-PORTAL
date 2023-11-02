import { TestBed } from '@angular/core/testing';

import { AMSUsersService } from './ams-users.service';

describe('AMSUsersService', () => {
  let service: AMSUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AMSUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
