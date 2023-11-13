import { Component, OnInit } from "@angular/core";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { DashboardService } from '../../../services/icms-services/dashboard-services/dashboard.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  chartOptions: any = {};
  lastWeekCasesChartOptions: any;
  totalNumberOfPolicies: any;
  numberOfExpiredPolicies: any;
  expiringWithinThirtydays: any;
  expiredPoliciesCount: any[][] = [];
  totalNumberOfDishonouredCheque: any;
  ThreeTimesInLastWeek: any;
  lastWeekCaseCount: any;
  outstandingCaseDuringTheQuarter: any;
  closedCaseDuringTheQuarter: any;
  OutstandingCasesInPreviousQuarter: any;
  NewCasesDuringQuarter: any;
  OutstandingCaseAmountDuringTheQuarter: any;
  lastWeekCaseByFraudType: any;
  lastWeekCases: { key: string; value: number; }[];
  expiredPoliciesToday: any;
  expirationDate: string;
  labels = [];
  colors: any;
  options: any;
  data: any;

  constructor(private dashboardService: DashboardService) {
    this.expirationDate = new Date().toISOString().slice(0, 10); // Today's date
  }

  ngOnInit(): void {

    this.dashboardService.getLastWeekCasesByFraudType().subscribe(
      (data: any) => { // Specify the type of 'data' as 'any' or a more specific type if available
        this.chartOptions = {
          series: Object.values(data),
          chart: {
            width: 380,
            type: 'pie'
          },
          labels: Object.keys(data),
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }
          ]
        };
      },
      error => {
        console.log('An error occurred while fetching data:', error);
      }
    );

    this.dashboardService.getTotalNumberOfPolicies().subscribe((data) => {
      this.totalNumberOfPolicies = data.toString();
    });

    this.dashboardService.getNumberOfExpiredPolicies().subscribe((data) => {
      this.numberOfExpiredPolicies = data.toString();
    });
    this.dashboardService.getExpiringWithinThirtydays().subscribe((data) => {
      this.expiringWithinThirtydays = data.toString();
    });
    this.dashboardService.getTotalDishonouredChequeCount().subscribe((data) => {
      this.totalNumberOfDishonouredCheque = data.toString();
    });
    this.dashboardService.getThreeTimesInLastWeek().subscribe((data) => {
      this.ThreeTimesInLastWeek = data.toString();
    });
    this.dashboardService.getLastWeekCasesCount().subscribe((data) => {
      this.lastWeekCaseCount = data.toString();
    });
    this.dashboardService.getOutstandingCasesDuringQuarter().subscribe((data) => {
      this.outstandingCaseDuringTheQuarter = data.toString();
    });
    this.dashboardService.getClosedCasesDuringQuarter().subscribe((data) => {
      this.closedCaseDuringTheQuarter = data.toString();
      console.log(this.closedCaseDuringTheQuarter)
    });
    this.dashboardService.getOutstandingCasesInPreviousQuarter().subscribe((data) => {
      this.OutstandingCasesInPreviousQuarter = data.toString();
    });
    this.dashboardService.getNewCasesDuringQuarter().subscribe((data) => {
      this.NewCasesDuringQuarter = data;
    });
    this.dashboardService.getOutstandingCasesAmountDuringQuarter().subscribe((data) => {
      this.OutstandingCaseAmountDuringTheQuarter = this.insertComma(data);
    });
    this.dashboardService.getExpiredPoliciesTodayCountByDistrict().subscribe((data) => {
      this.expiredPoliciesToday = data;
      const values = []
      for (const data of this.expiredPoliciesToday) {
        this.labels.push(data.districtName.replace(' DISTRICT', ''));
        values.push(data.noOfExpiredPolicies)
      }
      this.colors = {
        label: 'Expired Policies',
        backgroundColor: 'rgba(0, 0, 211, 0.4)',
        borderColor: '#4dbd74',
        pointHoverBackgroundColor: '#fff',
      }
      this.data = {
        labels: this.labels,
        datasets: [{
          data: values,
          ...this.colors,
          fill: { value: 65 }
        }],
      }
      this.options = {
        plugins: {
          legend: {
            display: true
          }
        },
        maintainAspectRatio: false,
        elements: {
          line: {
            tension: 0.4
          },
        }
      };
    });

  }

  insertComma(input: any): string {
    if (typeof input !== 'string') {
      input = input.toString();
    }
    return input.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}















