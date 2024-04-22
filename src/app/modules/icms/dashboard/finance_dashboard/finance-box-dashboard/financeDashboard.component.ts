import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICMSDashboardService } from '../../services/icms-dashboard.service';
import { COBHistoryDTO } from 'src/app/models/cms-models/cob-history';
import { log } from 'console';

@Component({
  selector: 'financeDashboard',
  templateUrl: './financeDashboard.component.html',
  styleUrls: ['./financeDashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FinanceDashboardComponent {
  public allDatas: any;
  private subscription: Subscription;
  

  constructor(private icmsdashboardService: ICMSDashboardService) {}

  ngOnInit() {
    this.getAllBranchDashboardData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  branchId: string = "ET0010307";

  getAllBranchDashboardData(): void {
    this.subscription = this.icmsdashboardService.getBranchDashboardDatas(this.branchId).subscribe(
      (response: any) => {
        this.allDatas = response;
        console.log("kkkk", this.allDatas);
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
