import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  AvatarModule,
  ButtonGroupModule,
  CardModule,
  CollapseModule,
  FormModule,
  GridModule,
  NavModule,
  PopoverModule,
  ProgressModule,
  TabsModule,
  UtilitiesModule
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ButtonModule } from 'primeng/button';

import { ChartjsModule } from '@coreui/angular-chartjs';
import { CMSDashboardRoutingModule } from './dashboard-routing.module';
import { WeeklyElpasedTimeComponent } from './weeklyElpasedTime/weeklyElpasedTime.component';
import { UnusualChartComponents } from './unusualJobs/unusualJobs.component';
import { COBHistoryComponent } from './cobHistory/cobHistory.component';
import { StageLineGraphComponent } from './stageLineGraph/stageLineGraph.component';
import { JobMonthlyElpasedTimeComponent } from './jobGraph/jobGraph.component';
import { MonthlyElpasedTimeComponent } from './monthlyElpasedTime/monthlyElpasedTime.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from 'primeng/api';

@NgModule({
  imports: [
    CMSDashboardRoutingModule,
    CardModule,
    NavModule,
    IconModule,
    TabsModule,
    UtilitiesModule,
    SharedModule,
    CollapseModule,
    InputTextModule,
    CommonModule,
    ReactiveFormsModule,
    PopoverModule,
    DynamicDialogModule,
    GridModule,
    ProgressModule,
    FormModule,
    FormsModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    NgApexchartsModule
  ],
  declarations: [
    COBHistoryComponent,
    JobMonthlyElpasedTimeComponent,
    MonthlyElpasedTimeComponent,
    StageLineGraphComponent,
    UnusualChartComponents,
    WeeklyElpasedTimeComponent
  ],
  providers: [
    DatePipe
  ]
})
export class DashboardModule {
}
