import { TestBed } from '@angular/core/testing';

import { IFRService } from './ifr.service';

describe('IFRService', () => {
  let service: IFRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IFRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
