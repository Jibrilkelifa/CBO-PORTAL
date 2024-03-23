import { TestBed } from '@angular/core/testing';

import { IFBService } from './IFB-services.service';

describe('IFBService', () => {
  let service: IFBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IFBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
