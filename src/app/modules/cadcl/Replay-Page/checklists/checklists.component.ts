import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CADailyCheckList } from 'src/app/models/cadcl-models/ca-daily-checklist';
import { CaResponseService } from 'src/app/services/cadcl-services/ca-response.service'

@Component({
  selector: 'app-checklists',
  templateUrl: './checklists.component.html',
  styleUrls: ['./checklists.component.scss']
})
export class ChecklistsComponent {

  public caChecklists: CADailyCheckList[] = [];

  public caChecklistDisplay: any[] = [];

  private subscriptions: Subscription[] = [];


  constructor(
    private caChecklistService: CaResponseService,
    private router:Router,
  ) {}

  ngOnInit() {
    this.getcaChecklists();
  }

  getcaChecklists(): void {
    var branch = localStorage.getItem('branch');
    console.log('branch ',branch);
    
    this.subscriptions.push(
      this.caChecklistService.getCaDailyChecklistsOfBranch(branch).subscribe(
        (response: any) => {
          console.log(response);
          
          this.caChecklists = response;
          this.caChecklistDisplay = this.caChecklists;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  viewHistory(id: number) {
    this.router.navigate(['cao/checklists/replay/', id]);
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}