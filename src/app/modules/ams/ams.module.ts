import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AuditUniverseComponent } from './components/Audit-universe/audit-universe/audit-universe.component';
import { AnnualPlanComponent } from './components/Annual-plan/annual-plan/annual-plan.component';
import { NewAnnualPlanComponent } from './components/Annual-plan/new-annual-plan/newAnnualPlan.component';
import { AuditObjectComponent } from './components/Audit-objects/audit-object/audit-object.component';
import { AuditObjectDetailComponent } from './components/Audit-objects/audit-object-detail/audit-object-detail.component';
import { NewAuditObjectComponent } from './components/Audit-objects/new-audit-object/newAuditObject.component';
import { RiskScoreComponent } from './components/Annual-plan/risk-score/risk-score.component';
import { NewAuditUniverseComponent } from './components/Audit-universe/new-audit-universe/newAuditUniverse.component';
import { AuditableAreaComponent } from './components/Auditable-area/auditable-area/auditable-area.component';
import { NewAuditableAreaComponent } from './components/Auditable-area/new-auditable-area/newAuditableArea.component';
import { NewCheckListComponent } from './components/Checklist/new-checklist/newChecklist.component';
import { CheckListComponent } from './components/Checklist/checklist/checkList.component';
import { NewAuditScheduleComponent } from './components/Audit-schedule/new-audit-schedule/newAuditSchedule.component';
import { AuditScheduleComponent } from './components/Audit-schedule/audit-schedule/audit-schedule.component';
import {CalendarModule} from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { AmsRoutingModule } from './ams-routing.module';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '@coreui/icons-angular';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AutoGenerateAnnualPlanComponent } from './components/Annual-plan/auto-geneerate-annualPlan/auto-generate-annualPlan.component';
import { AssignMembersComponent } from './components/Audit-schedule/assign-members/assign-members.component';
import { AuditStaffComponent } from './components/Audit-Staff/audit-staff/audit-staff.component';
import { NewAuditStaffComponent } from './components/Audit-Staff/new-audit-staff/newAuditStaff.component';
import { NewAuditTypeComponent } from './components/Audit-type/new-audit-type/newAuditType.component';
import { AuditTypeComponent } from './components/Audit-type/audit-type/audit-type.component';
import { NewRiskItemComponent } from './components/Risk-item/new-risk-item/newRiskItem.component';
import { RiskItemComponent } from './components/Risk-item/risk-item/risk-item.component';
import { AuditEngagementComponent } from './components/Audit-engagement/audit-engagement/audit-engagement.component';
import { AuditEngagementDetailComponent } from './components/Audit-engagement/audit-engagement-detail/audit-engagement-detail.component';
import { AuditFindingsDetailComponent } from './components/audit-findings/audit-findings-detail/audit-findings-detail.component';
import { NewAuditEngagementComponent } from './components/Audit-engagement/new-audit-engagement/newAuditEngagement.component';
import { AuditProgramComponent } from './components/audit-program/audit-program/audit-program.component';
import { AuditProgramDetailComponent } from './components/audit-program/audit-program-detail/audit-program-detail.component';
import { NewAuditProgramComponent } from './components/audit-program/new-audit-program/new-audit-program.component';
import { AuditFindingsComponent } from './components/audit-findings/audit-findings/audit-findings.component';
import { NewAuditFindingsComponent } from './components/audit-findings/new-audit-findings/new-audit-findings.component';
import { NewAuditFindingsCommentComponent } from './components/audit-findings/new-audit-findings-comment/new-audit-findings-comment.component';
import { NewWBSComponent } from './components/audit-program/new-wbs/new-wbs.component';
import { Report } from './components/Report/report.component';
import { ReportList } from './components/Report/list/report-list.component';
import { ReportDisplay } from './components/Report/display/display.component';
import { CheckboxModule } from 'primeng/checkbox';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AccordionModule,BadgeModule,BreadcrumbModule,CardModule,CollapseModule,GridModule,UtilitiesModule,SharedModule,ListGroupModule,PlaceholderModule,ProgressModule,SpinnerModule,TabsModule,NavModule, CarouselModule,FormModule,PaginationModule,PopoverModule} from '@coreui/angular';
import { FileUploadModule } from "primeng/fileupload";


@NgModule({
  declarations: [
    AuditUniverseComponent,
    NewAuditUniverseComponent,
    AnnualPlanComponent,
    NewAnnualPlanComponent,
    RiskScoreComponent,
    AuditObjectComponent,
    NewAuditObjectComponent,
    AuditableAreaComponent,
    NewAuditableAreaComponent,
    NewCheckListComponent,
    CheckListComponent,
    NewAuditScheduleComponent,
    AuditScheduleComponent,
    AutoGenerateAnnualPlanComponent,
    AuditObjectDetailComponent,
    AssignMembersComponent,
    AuditStaffComponent,
    NewAuditStaffComponent,
    NewAuditTypeComponent,
    AuditTypeComponent,
    NewRiskItemComponent,
    RiskItemComponent,
    AuditEngagementComponent,
    AuditEngagementDetailComponent,
    NewAuditEngagementComponent,
    AuditProgramComponent,
    AuditProgramDetailComponent,
    NewAuditProgramComponent,
    AuditFindingsComponent,
    NewAuditFindingsComponent,
    NewAuditFindingsCommentComponent,
    NewWBSComponent,
    AuditFindingsDetailComponent,
    Report,
    ReportList,
    ReportDisplay,

    
  ],
  imports: [
    NgApexchartsModule,
    DynamicDialogModule,
    CommonModule,
    AmsRoutingModule,
    ButtonModule,
    TableModule,
    FormsModule,
    CommonModule,
    FormsModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    InputTextModule,
    MessagesModule,
    ToastModule,
    CalendarModule,
    CheckboxModule,
    CKEditorModule,
    FileUploadModule
    
  ],
  providers: [ConfirmationService, MessageService, DialogService,DatePipe],
})
export class AmsModule {}
