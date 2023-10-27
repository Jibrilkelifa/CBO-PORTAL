import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { AuditUniverseComponent } from './components/Audit Universe/audit-universe/audit-universe.component';
import { AnnualPlanComponent } from './components/Annual plan/annual-plan/annual-plan.component';
import { NewAnnualPlanComponent } from './components/Annual plan/new-annual-plan/newAnnualPlan.component';
import { AuditObjectComponent } from './components/Audit-objects/audit-object/audit-object.component';
import { AuditObjectDetailComponent } from './components/Audit-objects/audit-object-detail/audit-object-detail.component';
import { NewAuditObjectComponent } from './components/Audit-objects/new-audit-object/newAuditObject.component';
import { RiskScoreComponent } from './components/Annual plan/risk-score/risk-score.component';
import { NewAuditUniverseComponent } from './components/Audit Universe/new-audit-universe/newAuditUniverse.component';
import { AuditableAreaComponent } from './components/Auditable-area/auditable-area/auditable-area.component';
import { NewAuditableAreaComponent } from './components/Auditable-area/new-auditable-area/newAuditableArea.component';
import { NewCheckListComponent } from './components/Checklist/new-checklist/newChecklist.component';
import { CheckListComponent } from './components/Checklist/checklist/checkList.component';
import { NewAuditScheduleComponent } from './components/Audit-schedule/new-audit-schedule/newAuditSchedule.component';
import { AuditScheduleComponent } from './components/Audit-schedule/audit-schedule/audit-schedule.component';
import {CalendarModule} from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';
import { AmsRoutingModule } from './ams-routing.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  CardModule,
  CollapseModule,
  GridModule,
  UtilitiesModule,
  SharedModule,
  ListGroupModule,
  PlaceholderModule,
  ProgressModule,
  SpinnerModule,
  TabsModule,
  NavModule,
  CarouselModule,
  FormModule,
  PaginationModule,
  PopoverModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';

import { NgApexchartsModule } from 'ng-apexcharts';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AutoGenerateAnnualPlanComponent } from './components/Annual plan/auto-geneerate-annualPlan/auto-generate-annualPlan.component';
import { AssignMembersComponent } from './components/Audit-schedule/assign-members/assign-members.component';

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
    AssignMembersComponent
    
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
    CalendarModule
  ],
  providers: [ConfirmationService, MessageService, DialogService,DatePipe],
})
export class AmsModule {}