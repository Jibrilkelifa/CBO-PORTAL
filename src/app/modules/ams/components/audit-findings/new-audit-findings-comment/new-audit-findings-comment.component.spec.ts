import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { NewAuditFindingsCommentComponent } from './new-audit-findings-comment.component';

describe('NewAuditFindingsCommentComponent', () => {
  let component: NewAuditFindingsCommentComponent;
  let fixture: ComponentFixture<NewAuditFindingsCommentComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewAuditFindingsCommentComponent],
      imports: [CardModule, GridModule, FormsModule, FormModule, ButtonModule, RouterTestingModule],
      providers: [IconSetService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    // iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(NewAuditFindingsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
