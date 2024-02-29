import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobListComponent } from './cob-list.component';

describe('CobListComponent', () => {
  let component: CobListComponent;
  let fixture: ComponentFixture<CobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
