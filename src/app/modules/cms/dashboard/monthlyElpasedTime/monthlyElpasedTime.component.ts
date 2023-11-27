import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis,
} from 'ng-apexcharts';

import { DailyHistoryDTO } from 'src/app/models/cms-models/daily-history';
import { COBHistoryDTO } from 'src/app/models/cms-models/cob-history';
import { CMSDashboardService } from 'src/app/services/cms-services/cms-dashboard.service';
import { Subscription } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any;
  dataLabels: any;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'monthly-barChart',
  templateUrl: './monthlyElpasedTime.component.html',
  styleUrls: ['./monthlyElpasedTime.component.scss'],
})
export class MonthlyElpasedTimeComponent implements OnInit {
  chartData: any;

  private subscriptions = new Subscription();

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {};

  dailyHistoryData: DailyHistoryDTO[];
  COBHistory: COBHistoryDTO[];
  selectedMonthString: string;

  constructor(
    private dashboardService: CMSDashboardService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.dashboardService.getAllJTSummary().subscribe((data) => {
        this.dailyHistoryData = data.dailyHistoryList;
        const { averageCOBTime } = data;
        const [hours, minutes, seconds] = averageCOBTime.split(':').map(Number);
        const averageCOBTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
        this.updateChart(averageCOBTimeInSeconds);
      })
    );

    this.chartOptions = {
      series: [],
      chart: {
        height: 450,
        type: 'bar',
      },
      stroke: {
        width: [0, 2],
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [2],
      },
      tooltip: {
        theme: 'dark',
        enabled: true,
        custom: ({ series, seriesIndex, dataPointIndex, w }) => {
          const data = this.dailyHistoryData.find(
            (item) =>
              moment(item.utcDate, 'YYYYMMDD').date() - 1 === dataPointIndex
          );
          if (data) {
            const {
              cobDay,
              utcDate,
              startTime,
              endTime,
              elapsedTime,
              uploadedBy,
              uploadDateTime,
            } = data;
            const formattedUtcDate = moment(utcDate, 'YYYYMMDD').format(
              'DD MMMM YYYY'
            );
            return `<div style="background-color: #333; color: #fff; padding: 10px; border-radius: 5px;">
              <div>COB Day: ${cobDay}</div>
              <div>UTC Date: ${formattedUtcDate}</div>
              <div>Start Time: ${startTime}</div>
              <div>End Time: ${endTime}</div>
              <div>Elapsed Time: ${elapsedTime}</div>
              <div>Uploaded By: ${uploadedBy}</div>
              <div>Upload Date Time: ${uploadDateTime}</div>
            </div>`;
          }
          return '';
        },
      },

      labels: Array.from({ length: moment().daysInMonth() }, (_, i) =>
        moment().startOf('month').add(i, 'days').toISOString()
      ),
      xaxis: {
        tickPlacement: 'between',
        tickAmount: moment().daysInMonth(),
        title: {
          text: `Days of a month (${moment().format('MMMM')})`,
        },
        labels: {
          formatter: function (value, timestamp) {
            if (timestamp === undefined) {
              return '';
            }
            const date = new Date(timestamp);
            if (date.toDateString() === new Date().toDateString()) {
              return `${date.getDate()}`;
            }
            return date.getDate().toString();
          },
        },
      },
      yaxis: {
        title: {
          text: 'Elapsed Time',
        },
        labels: {
          formatter: function (value) {
            const hours = Math.floor(value / 3600);
            const minutes = Math.floor((value % 3600) / 60);
            const seconds = Math.floor(value % 60);
            return `${hours}h ${minutes}m ${seconds}s`;
          },
        },
      },
    };

    this.chart?.updateOptions(this.chartOptions);

    this.subscriptions.add(
      this.dashboardService.getAllJTSummary().subscribe((data) => {
        this.dailyHistoryData = data.dailyHistoryList;
        const { averageCOBTime } = data;
        const [hours, minutes, seconds] = averageCOBTime.split(':').map(Number);
        const averageCOBTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

        this.updateChart(averageCOBTimeInSeconds);
      })
    );

    this.chart?.updateOptions(this.chartOptions);
  }

  updateChart(averageCOBTimeInSeconds: number) {
    let daysInMonthObject: { [key: string]: number } = {};

    for (let i = 0; i < moment().daysInMonth(); i++) {
      daysInMonthObject[i] = 0;
    }

    for (const data of this.dailyHistoryData) {
      const { utcDate, elapsedTime } = data;
      const [hours, minutes, seconds] = elapsedTime.split(':').map(Number);
      const elapsedTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

      const date = moment(utcDate, 'YYYYMMDD').toDate();

      daysInMonthObject[date.getDate() - 1] = elapsedTimeInSeconds;
    }

    let averageCOBTimeSeries = Array(moment().daysInMonth()).fill(
      averageCOBTimeInSeconds
    );

    this.chartOptions.series = [
      {
        name: 'Elapsed Time',
        type: 'column',
        data: Object.values(daysInMonthObject),
      },
      {
        name: 'Average COB Time',
        type: 'line',
        data: averageCOBTimeSeries,
      },
    ];

    this.chart?.updateOptions(this.chartOptions);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
