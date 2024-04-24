import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { BranchDashboardComponent } from './branch_dashboard/branch_box_dashboard/branchDashboard.component';
import { DistrictDashboardComponent } from './district_dashboard/district-box-dashboard/districtDashboard.component';
import { BankingOperationDashboardComponent } from './banking_operation_dashboard/banking_operation_box_dashboard/bankingOperation.component';
import { FinanceDashboardComponent } from './finance_dashboard/finance-box-dashboard/financeDashboard.component';
import { IFBDashboardComponent } from './IFB_dashboard/ifb-box-dashboard/ifbDashboard.component';
import { ProcurementDashboardComponent } from './Procurement_dashboard/procurement-box-dashboard/procurementDashboard.component';
import { RCMPDashboardComponent } from './RCMP_users_dashboard/rcmp-box-dashboard/rcmpDashboard.component';
import { ShareManagementDashboardComponent } from './share_management_dashboard/share_management_box_dashboard/shareManagementDashboard.component';
import { TradeServiceDashboardComponent } from './trade_service_dashboard/trade_service_box_dashboard/tradeServiceDashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: $localize`Dashboard`
    }
  },

  {
    path: 'branch',
    component: BranchDashboardComponent,
    data: {
      title: `Branch Dashboard`
    }
  },
  {
    path: 'district',
    component: DistrictDashboardComponent,
    data: {
      title: `District Dashboard`
    }
  },
  {
    path: 'bankingOperation',
    component: BankingOperationDashboardComponent,
    data: {
      title: `Banking Operation Dashboard`
    }
  },
  {
    path: 'finance',
    component: FinanceDashboardComponent,
    data: {
      title: `Finance Dashboard`
    }
  },
  {
    path: 'ifb',
    component: IFBDashboardComponent,
    data: {
      title: `IFB Dashboard`
    }
  },
  {
    path: 'procurement',
    component: ProcurementDashboardComponent,
    data: {
      title: `Procurement Dashboard`
    }
  },
  {
    path: 'rcmp',
    component: RCMPDashboardComponent,
    data: {
      title: `RCMP Dashboard`
    }
  },
  {
    path: 'shareManagement',
    component: ShareManagementDashboardComponent,
    data: {
      title: `Share Management Dashboard`
    }
  },
  {
    path: 'tradeService',
    component: TradeServiceDashboardComponent,
    data: {
      title: `Trade Service Dashboard`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
