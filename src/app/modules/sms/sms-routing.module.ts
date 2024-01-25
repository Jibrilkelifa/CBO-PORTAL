import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMessagesComponent } from './components/all-messages/all-messages.component';
import { AuditUniverseComponent } from '../ams/components/Audit-universe/audit-universe/audit-universe.component';
import { SentMessagesComponent } from './components/sent-messages/sent-messages.component';
import { SingleComponent } from './components/send-single/single.component';
import { BulkComponent } from './components/send-bulk/bulk.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'SMS',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'all-messaages',
      },
      {
        path: 'all-messages',
        component: AllMessagesComponent,
        data: {
          title: 'All messages',
        },
      },
      {
        path: 'sent-messages',
        component: AllMessagesComponent,
        data: {
          title: 'Sent messages',
        },
      },
      {
        path: 'cost',
        component: AllMessagesComponent,
        data: {
          title: 'Cost',
        },
      },
      {
        path: 'bulks',
        component: SentMessagesComponent,
        data: {
          title: 'bulSMSreport',
        },
      },
      {
        path: 'customers',
        component: AllMessagesComponent,
        data: {
          title: 'customerReport',
        },
      },

       {
        path: 'single',
        component: SingleComponent,
        data: {
          title: 'Single messageing',
        },
      },
      {
        path: 'customer',
        component: SingleComponent,
        data: {
          title: 'Customer Messaging',
        },
      },
      {
        path: 'bulk',
        component: BulkComponent,
        data: {
          title: 'Bulk Messaging',
        },
      },
      {
        path: 'template',
        component:  BulkComponent,
        data: {
          title: 'Template Messaging',
        },
      },
      {
        path: 'group',
        component:  SingleComponent,
        data: {
          title: 'Group Messaging',
        },
      },

     

      // {
      //   path: 'audit-universe',
      //   component: AuditUniverseComponent,
      //   data: {
      //     title: 'Audit Universe',
      //   },
      // },

      // {
      //   path: 'checklist',
      //   component: CheckListComponent,
      //   data: {
      //     title: 'Checklist',
      //   },
      // },

      // {
      //   path: 'auditable-area',
      //   component: AuditableAreaComponent,
      //   data: {
      //     title: 'Auditable Area',
      //   },
      // },

      // {
      //   path: 'annual-plan',
      //   component: AnnualPlanComponent,
      //   data: {
      //     title: 'Annual Plan',
      //   },
      // },

      // {
      //   path: 'audit-schedule',
      //   component: AuditScheduleComponent,
      //   data: {
      //     title: 'Audit Schedule',
      //   },
      // },
      // {
      //   path: 'audit-engagement',
      //   component: AuditEngagementComponent,
      //   data: {
      //     title: 'Audit Engagement',
      //   },
      // },
      // {
      //   path: 'audit-engagement-details',
      //   component: AuditEngagementDetailComponent,
      //   data: {
      //     title: 'Audit Engagement Details',
      //   },
      // },
      // {
      //   path: 'audit-findings-details',
      //   component: AuditFindingsDetailComponent,
      //   data: {
      //     title: 'Audit Findings Details',
      //   },
      // },
      // {
      //   path: 'audit-program-details',
      //   component: AuditProgramDetailComponent,
      //   data: {
      //     title: 'Audit Engagement Details',
      //   },
      // },
      // {
      //   path: 'audit-program',
      //   component: AuditProgramComponent,
      //   data: {
      //     title: 'Audit Program',
      //   },
      // },
      // {
      //   path: 'audit-staff',
      //   component: AuditStaffComponent,
      //   data: {
      //     title: 'Auditors',
      //   },
      // },
      // {
      //   path: 'audit-type',
      //   component: AuditTypeComponent,
      //   data: {
      //     title: 'Audit Team',
      //   },
      // },
      // {
      //   path: 'risk-item',
      //   component: RiskItemComponent,
      //   data: {
      //     title: 'Risk type',
      //   },
      // },
      // {
      //   path: 'report',
      //   component: Report,
      //   data: {
      //     title: 'Report',
      //   },
      // },
      // {
      //   path: ' ',
      //   component: AuditFindingsComponent,
      //   data: {
      //     title: 'Audit Finding',
      //   },
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmsRoutingModule { }
