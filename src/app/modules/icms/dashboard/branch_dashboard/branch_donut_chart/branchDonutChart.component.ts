import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { ICMSDashboardService } from "../../services/icms-dashboard.service";
import { Subscription } from "rxjs";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: "branchDonutChart",
  templateUrl: "./branchDonutChart.component.html",
  styleUrls: ["./branchDonutChart.component.scss"]
})
export class BranchDonutChartComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  branchId: string = localStorage.getItem('branchId');
  private subscription: Subscription;
  public allDoughnutDatas: any;


  constructor(private icmsdashboardService: ICMSDashboardService) {
    this.chartOptions = {
      series: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10],
      chart: {
        type: "donut"
      },
      labels: ["Cash Management", "Customer Account Operation", "Suspense Account Management", "Loan and Advances", "Forex Trading", "Expense Management", "Digital Banking", "Branch Opening Requirements", "Key Book and Rubber Stamp", "Interest Free Banking", "Stock and Negotiable Instrument Management", "Fixed Asset Management", "Human Resource Management"],
      responsive: [
        {
          breakpoint: 480,
          options: {

            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ngOnInit() {
    this.getBranchDashboardDoughnutData();
  }

  getBranchDashboardDoughnutData(): void {
    this.subscription = this.icmsdashboardService.getBranchDashboardDoughnutDatas(this.branchId).subscribe(
      (response: any) => {
        this.allDoughnutDatas = response;

        // Initialize an array with zeros
        let seriesData = new Array(this.chartOptions.labels.length).fill(0);

        // Update the values for the labels that exist in the response
        for (let label in this.allDoughnutDatas) {
          let index = this.chartOptions.labels.indexOf(label);
          if (index !== -1) {
            seriesData[index] = this.allDoughnutDatas[label];
          }
        }

        // Update the chart series data
        this.chartOptions.series = seriesData;
      },
      
      (error) => {
        console.error('Failed to get dashboard data:', error);
      }
    );
  }
}
