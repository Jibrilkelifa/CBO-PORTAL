import { TestBed } from '@angular/core/testing';

import { TeamMemberService } from './team-memeber.service';

describe('AnnualPlanService', () => {
  let service: TeamMemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamMemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
