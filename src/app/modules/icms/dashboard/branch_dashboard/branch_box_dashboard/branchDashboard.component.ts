import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICMSDashboardService } from '../../services/icms-dashboard.service';

@Component({
  selector: 'app-ICMSdashboard',
  templateUrl: './branchDashboard.component.html',
  styleUrls: ['./branchDashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class BranchDashboardComponent {
  public allDatas: any;
  private subscription: Subscription;
  branchId: string = localStorage.getItem('branchId');


  constructor(private icmsdashboardService: ICMSDashboardService) {}

  ngOnInit() {
    this.getAllBranchDashboardData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  
  getAllBranchDashboardData(): void {
    this.subscription = this.icmsdashboardService.getBranchDashboardDatas(this.branchId).subscribe(
      (response: any) => {
        this.allDatas = response;
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
