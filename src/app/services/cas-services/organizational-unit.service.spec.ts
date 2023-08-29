import { TestBed } from '@angular/core/testing';
import { OrganizationalUnitService } from './organizational-unit.service';


describe('OrganizationalUnitService', () => {
  let service: OrganizationalUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationalUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
