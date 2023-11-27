import { TestBed } from '@angular/core/testing';
import { ActionTakenService } from './action-taken.service';


describe('ActionTakenService', () => {
  let service: ActionTakenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionTakenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
