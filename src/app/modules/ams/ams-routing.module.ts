import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuditUniverseComponent } from './components/Audit-universe/audit-universe/audit-universe.component';
import { AnnualPlanComponent } from './components/Annual-plan/annual-plan/annual-plan.component';
import { AuditObjectComponent } from './components/Audit-objects/audit-object/audit-object.component';
import { AuditableAreaComponent } from './components/Auditable-area/auditable-area/auditable-area.component';
import { CheckListComponent } from './components/Checklist/checklist/checkList.component';
import { AuditScheduleComponent } from './components/Audit-schedule/audit-schedule/audit-schedule.component';
import { AuditStaffComponent } from './components/Audit-Staff/audit-staff/audit-staff.component';
import { AuditObjectDetailComponent } from './components/Audit-objects/audit-object-detail/audit-object-detail.component';
import { AuditTypeComponent } from './components/Audit-type/audit-type/audit-type.component';
import { RiskItemComponent } from './components/Risk-item/risk-item/risk-item.component';
import { AuditEngagementComponent } from './components/Audit-engagement/audit-engagement/audit-engagement.component';
import { AuditEngagementDetailComponent } from './components/Audit-engagement/audit-engagement-detail/audit-engagement-detail.component';
import { AuditProgramComponent } from './components/audit-program/audit-program/audit-program.component';
import { AuditFindingsComponent } from './components/audit-findings/audit-findings/audit-findings.component';
import { AuditProgramDetailComponent } from './components/audit-program/audit-program-detail/audit-program-detail.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'AMS',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'authorityTable',
      },
      {
        path: 'audit-object',
        component: AuditObjectComponent,
        data: {
          title: 'Audit Object',
        },
      },
      {
        path: 'audit-object-detail',
        component: AuditObjectDetailComponent,
        data: {
          title: 'Audit Object detail',
        },
      },
      {
        path: 'audit-object-detail/:id',
        component: AuditObjectDetailComponent,
        data: {
          title: 'Audit Object detail',
        },
      },

      {
        path: 'audit-universe',
        component: AuditUniverseComponent,
        data: {
          title: 'Audit Universe',
        },
      },

      {
        path: 'checklist',
        component: CheckListComponent,
        data: {
          title: 'Checklist',
        },
      },

      {
        path: 'auditable-area',
        component: AuditableAreaComponent,
        data: {
          title: 'Auditable Area',
        },
      },

      {
        path: 'annual-plan',
        component: AnnualPlanComponent,
        data: {
          title: 'Annual Plan',
        },
      },

      {
        path: 'audit-schedule',
        component: AuditScheduleComponent,
        data: {
          title: 'Audit Schedule',
        },
      },
      {
        path: 'audit-engagement',
        component: AuditEngagementComponent,
        data: {
          title: 'Audit Engagement',
        },
      },
      {
        path: 'audit-engagement-details',
        component: AuditEngagementDetailComponent,
        data: {
          title: 'Audit Engagement Details',
        },
      },
      {
        path: 'audit-program-details',
        component: AuditProgramDetailComponent,
        data: {
          title: 'Audit Engagement Details',
        },
      },
      {
        path: 'audit-program',
        component: AuditProgramComponent,
        data: {
          title: 'Audit Program',
        },
      },
      {
        path: 'audit-staff',
        component: AuditStaffComponent,
        data: {
          title: 'Auditors',
        },
      },
      {
        path: 'audit-type',
        component: AuditTypeComponent,
        data: {
          title: 'Audit Team',
        },
      },
      {
        path: 'risk-item',
        component: RiskItemComponent,
        data: {
          title: 'Risk type',
        },
      },
      {
        path: ' ',
        component: AuditFindingsComponent,
        data: {
          title: 'Audit Finding',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmsRoutingModule { }
