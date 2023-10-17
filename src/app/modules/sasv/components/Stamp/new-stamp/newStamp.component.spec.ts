import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { NewStampComponent } from './newStamp.component';

describe('NewStampComponent', () => {
  let component: NewStampComponent;
  let fixture: ComponentFixture<NewStampComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewStampComponent],
      imports: [CardModule, GridModule, FormsModule, FormModule, ButtonModule, RouterTestingModule],
      providers: [IconSetService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);

    fixture = TestBed.createComponent(NewStampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
