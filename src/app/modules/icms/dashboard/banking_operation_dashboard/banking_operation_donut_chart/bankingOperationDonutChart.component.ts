import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: "bankingOperationDonutChart",
  templateUrl: "./bankingOperationDonutChart.component.html",
  styleUrls: ["./bankingOperationDonutChart.component.scss"]
})
export class BankingOperationDonutChartComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 5545, 45, 2, 2, 434, 2, 44, 55,100],
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
      ],
      plotOptions: {
        pie: {
          donut: {
            size: '30px' // Adjust this value to change the donut radius. Smaller values make the donut radius smaller.
          }
        }
      }
    };
  }
}
