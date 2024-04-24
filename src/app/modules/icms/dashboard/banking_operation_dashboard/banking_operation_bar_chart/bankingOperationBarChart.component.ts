import { Component, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexGrid,
  ApexPlotOptions,
  ApexAnnotations
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  annotations: ApexAnnotations;
};

@Component({
  selector: "bankingOperationBarChart",
  templateUrl: "./bankingOperationBarChart.component.html",
  styleUrls: ["./bankingOperationBarChart.component.scss"]
})
export class BankingOperationBarChartComponent {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 470, 540, 580, 266, 888, 90]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false // This line hides the toolbar
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '50%', // Adjust this value as needed
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Adama",
          "Assela",
          "Bahirdar Area",
          "Bale",
          "Centeral Finfinne",
          "Chiro",
          "Dire Dawa",
          "Hawassa",
          "Hossana",
          "Jimma",
          "Mekele Area",
          "Nekemte",
          "North Finfinne",
          "Shashemane",
          "South Finfinne",
          "West Finfinne"
        ],
        labels: {
          show: false,
        },
        axisTicks: {
          show: false, // Add this line
        },
      },
      grid: {
        strokeDashArray: 0,
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
    
      
      

    };
  }
}
