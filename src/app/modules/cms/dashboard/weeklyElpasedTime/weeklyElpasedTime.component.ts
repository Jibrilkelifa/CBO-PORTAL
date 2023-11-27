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

import { WeeklyDTO } from 'src/app/models/cms-models/weekly-report';
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
  selector: 'app-dash',
  templateUrl: './weeklyElpasedTime.component.html',
  styleUrls: ['./weeklyElpasedTime.component.scss'],
})
export class WeeklyElpasedTimeComponent implements OnInit {
  stageDate: any;
  chartDataWithNulls: (DailyHistoryDTO | null)[] = [];

  private subscriptions = new Subscription();
  selectedDateValue: string;

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {};

  selectedWeek: WeeklyDTO;
  dailyHistoryData: DailyHistoryDTO[];
  COBHistory: COBHistoryDTO[];
  selectedWeekString: string;

  private readonly DAYS = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  ngOnInit() {
    this.initData();
  }

  constructor(
    private dashboardService: CMSDashboardService,
    private cdr: ChangeDetectorRef
  ) {
    this.initChartOptions();
  }

  private initChartOptions() {
    const today = moment();
    const startOfWeek = today.startOf('week').add(1, 'days');
    const dates = Array.from({ length: 6 }, (_, i) =>
      moment(startOfWeek).add(i, 'days').toISOString()
    );

    this.chartOptions = {
      ...this.chartOptions,
      series: [],
      chart: {
        events: {
          dataPointSelection: (event, chartContext, { dataPointIndex }) => {
            const dataPoint = this.chartDataWithNulls[dataPointIndex];
            if (dataPoint !== null) {
              this.stageDate = dataPoint.utcDate;
              this.selectedDateValue = dataPoint.utcDate;
              this.cdr.detectChanges();
            }
          }
        },
        height: 350,
        type: 'bar',
      },
      stroke: {
        width: [0, 7],
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      tooltip: {
        theme: 'dark',
        enabled: true,
        y: {
          formatter: function (value) {
            return value.toString();
          },
        },
        custom: ({ series, seriesIndex, dataPointIndex, w }) => {
          return this.customTooltip(dataPointIndex);
        },
      },
      labels: dates,
      xaxis: this.initXAxis(),
      yaxis: [
        {
          title: {
            text: 'Elapsed Time',
          },
          labels: {
            formatter: (value: any) => {
              return this.formatElapsedTime(value);
            },
          },
        },
      ],

    };
  }

  private initXAxis() {
    return {
      tickPlacement: 'between',
      tickAmount: 6,
      title: {
        text: 'Days of the week',
      },
      labels: {
        formatter: function (value: any, timestamp: string | number | Date | undefined) {
          if (timestamp === undefined) {
            return '';
          }
          const days = [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ];
          const date = new Date(timestamp);
          const dayIndex = date.getUTCDay();
          if (date.toDateString() === new Date().toDateString()) {
            return `${days[dayIndex]}`;
          }
          return days[dayIndex];
        },
      },
    };
  }

  private formatElapsedTime(value: number) {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = Math.floor(value % 60);
    return `${hours}h ${minutes}m ${seconds}s`;
  }



  initData() {
    const today = moment();
    const startOfLastWeek = today
      .subtract(1, 'weeks')
      .startOf('week')
      .add(1, 'days');
    const endOfLastWeek = moment(startOfLastWeek).add(6, 'days');
    const startDate = startOfLastWeek.format('YYYYMMDD');
    const endDate = endOfLastWeek.format('YYYYMMDD');

    this.selectedWeekString = today.format('YYYY-[W]WW');

    this.selectedWeek = { startDate, endDate };

    this.subscriptions.add(
      this.dashboardService.getCOBHistory().subscribe((data) => {
        this.COBHistory = data;
        this.updateDailyHistory();
        this.stageDate = startDate;
      })
    );
    this.selectedDateValue = startDate;
  }


  updateDailyHistory() {
    this.subscriptions.add(
      this.dashboardService
        .getDailyHistory(this.selectedWeek)
        .subscribe((data) => {
          this.dailyHistoryData = data;
          this.updateChart();
        })
    );
  }

  onWeekChange(event: any) {
    const weekString = event.target.value;
    const [year, week] = weekString.split('-W');
    const startDate = moment()
      .year(parseInt(year))
      .week(parseInt(week))
      .startOf('week')
      .format('YYYY-MM-DD');
    const endDate = moment()
      .year(parseInt(year))
      .week(parseInt(week))
      .endOf('week')
      .format('YYYY-MM-DD');

    this.selectedWeekString = weekString;
    this.selectedWeek = { startDate, endDate };
  }

  onApply() {
    const week = moment(this.selectedWeek.startDate);
    const startDate = week.startOf('week').add(1, 'days').format('YYYYMMDD');
    const endDate = week.endOf('week').format('YYYYMMDD');

    this.selectedWeek.startDate = startDate;
    this.selectedWeek.endDate = endDate;

    this.selectedDateValue = startDate;

    this.updateDailyHistory();
  }



  private customTooltip(dataPointIndex: number) {
    const data = this.dailyHistoryData.find(
      (item) =>
        moment(item.utcDate, 'YYYYMMDD').day() - 1 === dataPointIndex
    );
    if (data) {
      const utcDate = data.utcDate;
      const year = utcDate.substring(0, 4);
      const month = utcDate.substring(4, 6);
      const day = utcDate.substring(6, 8);
      const date = new Date(`${year}-${month}-${day}`);
      const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];
      const formattedDate = `${day} ${monthNames[date.getMonth()]
        } ${year}`;
      return `<div style="background-color: #333; color: #fff; padding: 10px; border-radius: 5px;">
                <div>Uploaded By: ${data.uploadedBy}</div>
                <div>Elapsed time: ${data.elapsedTime}</div>
                <div>Start Time: ${data.startTime}</div>
                <div>End Time: ${data.endTime}</div>
                <div>Upload Date Time: ${data.uploadDateTime}</div>
                <div>UTC Date: ${formattedDate}</div>
              </div>`;
    }
    return '';
  }

  updateChart() {
    const daysData = this.DAYS.reduce((acc: Record<string, number>, day) => {
      const data = this.dailyHistoryData.find((data) => data.cobDay === day);
      acc[day] = data ? this.timeToSeconds(data.elapsedTime) : 0;
      return acc;
    }, {});

    this.chartDataWithNulls = this.DAYS.map((day) => {
      const dataForDay = this.dailyHistoryData.find((data) => data.cobDay === day);
      return dataForDay || null;
    });


    this.chartOptions.series = [
      {
        name: 'Elapsed Time',
        type: 'column',
        data: Object.values(daysData),
      },
    ];

    this.chart?.updateSeries(this.chartOptions.series);
  }


  timeToSeconds(time: string): number {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
