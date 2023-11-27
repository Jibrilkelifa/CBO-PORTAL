import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCIPMComponent } from './new-cipm/new-cipm.component';
import { CIPMTableComponent } from './cipm-table/cipm-table.component';
import { NewCTComponent } from './new-ct/new-ct.component';
import {CIPMExpiringComponent} from './cipm-expiring/cipm-expiring.component';
import {CIPMExpiredComponent} from './cipm-expired/cipm-expired.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Collateral Insurance Policy Monitoring',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'View Collateral Insurance Policy Monitoring',
      },
      {
        path: 'addCIPM',
        component: NewCIPMComponent,
        data: {
          title: 'Add New Collateral Insurance Data',
        },
      },
      {
        path: 'viewCIPM',
        component: CIPMTableComponent,
        data: {
          title: 'View Collateral Insurance Policy Monitoring',
        },
      },
      {
        path: 'authorizeCIPMData',
        component: CIPMTableComponent,
        data: {
          title: 'Authorize CIPM Data',
        },
      },
      {
        path: 'addCT',
        component: NewCTComponent,
        data: {
          title: 'Collateral Type',
        },
      },
      {
        path: 'expiringWithIn30Days',
        component: CIPMExpiringComponent,
        data: {
          title: 'View expiring Policies',
        },
      },
      {
        path: 'expired',
        component: CIPMExpiredComponent,
        data: {
          title: 'View expired Policies',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CIPMRoutingModule {}

