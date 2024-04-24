import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule,
  WidgetModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BranchDashboardComponent } from './branch_dashboard/branch_box_dashboard/branchDashboard.component';
import { BranchDonutChartComponent } from './branch_dashboard/branch_donut_chart/branchDonutChart.component';
import { DistrictDonutChartComponent } from './district_dashboard/district-donut-chart/districtDonutChart.component';
import { DistrictDashboardComponent } from './district_dashboard/district-box-dashboard/districtDashboard.component';
import { BankingOperationDashboardComponent } from './banking_operation_dashboard/banking_operation_box_dashboard/bankingOperation.component';
import { BankingOperationDonutChartComponent } from './banking_operation_dashboard/banking_operation_donut_chart/bankingOperationDonutChart.component';
import { BankingOperationBarChartComponent } from './banking_operation_dashboard/banking_operation_bar_chart/bankingOperationBarChart.component';
import { FinanceDashboardComponent } from './finance_dashboard/finance-box-dashboard/financeDashboard.component';
import { FinanceDonutChartComponent } from './finance_dashboard/finance-donut-chart/financeDonutChart.component';
import { IFBDashboardComponent } from './IFB_dashboard/ifb-box-dashboard/ifbDashboard.component';
import { IFBDonutChartComponent } from './IFB_dashboard/ifb-donut-chart/ifbDonutChart.component';
import { ProcurementDonutChartComponent } from './Procurement_dashboard/procurement-donut-chart/procurementDonutChart.component';
import { ProcurementDashboardComponent } from './Procurement_dashboard/procurement-box-dashboard/procurementDashboard.component';
import { RCMPDashboardComponent } from './RCMP_users_dashboard/rcmp-box-dashboard/rcmpDashboard.component';
import { RCMPDonutChartComponent } from './RCMP_users_dashboard/rcmp-donut-chart/rcmpDonutChart.component';
import { ShareManagementDashboardComponent } from './share_management_dashboard/share_management_box_dashboard/shareManagementDashboard.component';
import { ShareManagementDonutChartComponent } from './share_management_dashboard/share_management_donut_chart/shareManagementDonutChart.component';
import { TradeServiceDashboardComponent } from './trade_service_dashboard/trade_service_box_dashboard/tradeServiceDashboard.component';
import { TradeServiceDonutChartComponent } from './trade_service_dashboard/trade_service_donut_chart/tradeServiceDonutChart.component';


@NgModule({
  imports: [
    DashboardRoutingModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    ChartModule,
    NgApexchartsModule,
    WidgetModule
  ],
  declarations: 
  [DashboardComponent,
    BranchDashboardComponent,
    BranchDonutChartComponent, 
    DistrictDashboardComponent, 
    DistrictDonutChartComponent,
    BankingOperationDashboardComponent,
    BankingOperationDonutChartComponent,
    BankingOperationBarChartComponent,
    FinanceDashboardComponent,
    FinanceDonutChartComponent,
    IFBDashboardComponent,
    IFBDonutChartComponent,
    ProcurementDonutChartComponent,
    ProcurementDashboardComponent,
    RCMPDashboardComponent,
    RCMPDonutChartComponent,
    ShareManagementDashboardComponent,
    ShareManagementDonutChartComponent,
    TradeServiceDashboardComponent,
    TradeServiceDonutChartComponent
  ]

})
export class DashboardModule {
}
