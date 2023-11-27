import {
  Component,
  ViewChild,
  OnInit,
  ChangeDetectorRef,
  Input,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import * as moment from 'moment';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexYAxis,
} from 'ng-apexcharts';
import { Subscription } from 'rxjs';
import { CMSDashboardService } from 'src/app/services/cms-services/cms-dashboard.service';
import { JobHistoryDTO } from 'src/app/models/cms-models/job-history-dto';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'jobHistory',
  templateUrl: './jobGraph.component.html',
  styleUrls: ['./jobGraph.component.scss'],
})
export class JobMonthlyElpasedTimeComponent implements OnDestroy {
  jobData: any;
  averageJobData: any;

  @Input() selectedSpecificData: any;
  private subscriptions = new Subscription();
  specificJobData: JobHistoryDTO[];
  jobDataWithNulls: (JobHistoryDTO | null)[] = [];
  jobHistoryList: string[] = [];

  public cumulativeElapsedTimeInSeconds: number[] = [];

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> = {};

  public stageNames: string[] = [];

  constructor(private cdr: ChangeDetectorRef, private dashboardService: CMSDashboardService,
  ) {
    this.chartOptions = {
      series: [],
      chart: {
        height: 400,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      xaxis: {
        type: 'category',
        title: {
          text: `Days of a month (${moment().format('MMMM')})`,
        },
      },
      yaxis: {
        title: {
          text: 'Elapsed times',
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
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
    };
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedSpecificData'] && changes['selectedSpecificData'].currentValue) {
      this.selectedSpecificData = changes['selectedSpecificData'].currentValue;
      if (this.selectedSpecificData) {
        this.subscriptions.add(
          this.dashboardService
            .getJobDetailForSpecificJob(this.selectedSpecificData)
            .subscribe((data) => {
              this.specificJobData = data.jobHistoryList;
              this.averageJobData = data.averageJobElapsedTime;

              this.jobDataWithNulls = this.jobHistoryList.map(
                (job: any) => {
                  return (
                    this.jobData.find(
                      (data: JobHistoryDTO) =>
                        data.jobId === job.jobId &&
                        data.batchId === job.batchId
                    ) || null
                  );
                }
              );
              this.chartOptions.series = [
                {
                  name: 'Selected job elapsed time',
                  type: 'line',
                  data: this.specificJobData.map((job) => this.convertToSeconds(job.elapsedTime))
                },
                {
                  name: 'Average job elapsed time',
                  type: 'line',
                  data: Array(this.specificJobData.length).fill(this.convertToSeconds(this.averageJobData))
                },
              ];
              if (this.chartOptions && this.chartOptions.xaxis) {
                this.chartOptions.xaxis.tickAmount = this.specificJobData.length;
              }

              this.chart?.updateOptions(this.chartOptions);
              this.cdr.detectChanges();
            })
        );
      }

    }

  }

  convertToSeconds(timeString: string): number {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
