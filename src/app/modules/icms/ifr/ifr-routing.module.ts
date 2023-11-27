import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewFraudComponent } from './new-ifr/new-ifr.component';
import { FraudClosedComponent } from './ifr-closed/ifr-closed.component';
import { FraudTableComponent } from './ifr-table/ifr-table.component';
import { FraudNBETableComponent } from './ifr-nbe-table/ifr-nbe-table.component';
import { IFRProvisionComponent } from './ifr-provision/ifr-provision.component';
import { FraudNewComponent } from './ifr-new/ifr-new.component';
import { FraudOutstandingpComponent } from './ifr-outstandingp/ifr-outstandingp.component';
import { FraudOutstandingComponent } from './ifr-outstanding/ifr-outstanding.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Incident or Fraud Report',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'viewFraud',
      },
      {
        path: 'addFraud',
        component: NewFraudComponent,
        data: {
          title: 'New Incident or Fraud Report',
        },
      },
      {
        path: 'viewFraud',
        component: FraudTableComponent,
        data: {
          title: 'Incident or Fraud Report Table',
        },
      },
      {
        path: 'closedFraud',
        component: FraudClosedComponent,
        data: {
          title: 'Incident or Fraud for closed and written off',
        },
      },
      {
        path: 'outstandingpFraud',
        component: FraudOutstandingpComponent,
        data: {
          title: 'Incident or Fraud for outstanding in previous quarter',
        },
      },
      {
        path: 'outstandingFraud',
        component: FraudOutstandingComponent,
        data: {
          title: 'Incident or Fraud for outstanding in this quarter',
        },
      },
      {
        path: 'newFraud',
        component: FraudNewComponent,
        data: {
          title: 'Incident or Fraud for new cases',
        },
      },
      {
        path: 'authorizeFraudCases',
        component: FraudTableComponent,
        data: {
          title: 'Incident or Fraud Report Authorization Table',
        },
      },
      {
        path: 'calculateProvision',
        component: IFRProvisionComponent,
        data: {
          title: 'Calculate Provision for Incident or Fraud',
        },
      },
      {
        path: 'viewFraudForNBE',
        component: FraudNBETableComponent,
        data: {
          title: 'Incident or Fraud Report Summary Table to National Bank of Ethiopia (NBE)',
        },
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FraudRoutingModule { }

