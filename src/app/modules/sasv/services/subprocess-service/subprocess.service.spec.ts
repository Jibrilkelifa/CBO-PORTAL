import { TestBed } from '@angular/core/testing';

import { SubProcessService } from './subprocess.service';

describe('SubProcessService', () => {
  let service: SubProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
