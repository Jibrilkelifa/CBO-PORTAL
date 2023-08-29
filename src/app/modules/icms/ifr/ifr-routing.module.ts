import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewFraudComponent } from './new-ifr/new-ifr.component';
import { FraudTableComponent } from './ifr-table/ifr-table.component';
import { FraudNBETableComponent } from './ifr-nbe-table/ifr-nbe-table.component';
import { IFRProvisionComponent } from './ifr-provision/ifr-provision.component';


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

