import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICMSDashboardService } from '../../services/icms-dashboard.service';

@Component({
  selector: 'districtDashboard',
  templateUrl: './districtDashboard.component.html',
  styleUrls: ['./districtDashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DistrictDashboardComponent {
  public allDatas: any;
  private subscription: Subscription;
  

  constructor(private icmsdashboardService: ICMSDashboardService) {}

  ngOnInit() {
    this.getAllDistrictDashboardData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  districtId: number =3;

  getAllDistrictDashboardData(): void {
    this.subscription = this.icmsdashboardService.getDistrictDashboardDatas(this.districtId).subscribe(
      (response: any) => {
        this.allDatas = response;  
        console.log("district ", response);
              
        // Format numbers with commas
        for (let key in this.allDatas) {
          if (typeof this.allDatas[key] === 'number') {
            this.allDatas[key] = this.allDatas[key].toLocaleString();
          }
        }
      },
      (error) => {
        console.error('Failed to get dashboard data:', error);
      }
    );
  }
  

  formatDate(dateString: string): string {
    if (dateString && dateString.length >= 11) {
      const year = dateString.substring(3, 7);
      const month = dateString.substring(7, 9);
      const day = dateString.substring(9, 11);
      const date = new Date(`${year}-${month}-${day}`);

      return `${date.getDate()} ${date.toLocaleString('default', {
        month: 'long',
      })} ${date.getFullYear()}`;
    } else {
      console.error(`Invalid date string: ${dateString}`);
      return dateString;
    }
  }
}
