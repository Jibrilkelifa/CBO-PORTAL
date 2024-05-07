import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMessagesComponent } from './components/cost-messages/all-messages.component';
import { AuditUniverseComponent } from '../ams/components/Audit-universe/audit-universe/audit-universe.component';
import { SentMessagesComponent } from './components/excel-messages/sent-messages.component';
import { SingleComponent } from './components/send-single/single.component';
import { GroupComponent } from './components/send-group/group.component';
import { BulkComponent } from './components/send-bulk/bulk.component';
import{SingleMessagesComponent}from './components/single-messages/single-messages.component'
import{GroupMessagesComponent} from './components/group-messages/group-messages.component'
import { SmsDashboardComponent } from './components/dashboard/monthlySMSReport/smsDashboard.component';
import { SMSHistoryComponent } from './components/dashboard/smsHistory/smsHistory.component';
import { TableReportComponents } from './components/dashboard/tableReport/tableReport.component';
import { CustomerComponent } from './components/send-customer/customer.component';
import { CustomerMessagessComponent } from './components/customer-messagess/customer-messages.component';
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
        redirectTo: 'sms-history',
      },
      {
        path: 'monthly-report',
        component: SmsDashboardComponent,
        data: {
          title: 'SMS-Dashboard',
        },
      },
      {
        path: 'sms-history',
        component: SMSHistoryComponent,
        data: {
          title: 'SMS-D',
        },
      },
      {
        path: 'table-report',
        component: TableReportComponents,
        data: {
          title: 'SMS-D',
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
          title: 'bulkSMSreport',
        },
      },
      {
        path: 'single-messages',
        component: SingleMessagesComponent,
        data: {
          title: 'report-Of-SingleMessages',
        },
      },
      {
        path: 'customer-messages',
        component: CustomerMessagessComponent,
        data: {
          title: 'report-Of-CustomerMessages',
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
        path: 'group-messages',
        component: GroupMessagesComponent,
        data: {
          title: 'Report-Of-GroupMessages',
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
        path: 'group',
        component:  GroupComponent,
        data: {
          title: 'Group Messaging',
        },
      },
      {
        path: 'customer',
        component:  CustomerComponent,
        data: {
          title: 'Customer Messaging',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmsRoutingModule { }
