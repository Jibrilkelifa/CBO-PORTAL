import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CADailyCheckList } from 'src/app/models/cadcl-models/ca-daily-checklist';
import { ChecklistService } from 'src/app/services/cadcl-services/checklist.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  constructor( private activatedRoute: ActivatedRoute,
    private caChecklistService: ChecklistService,
    private router:Router,){
    
  }
  
  private subscriptions: Subscription[] = [];
  objectId: number;
  caChecklist: CADailyCheckList;
  ngOnInit(){
    var x = this.activatedRoute.snapshot.paramMap.get("id");
    this.objectId = +x;
    if(this.objectId){
      this.getcaChecklist(this.objectId);
    }
  }


  getcaChecklist(id: number): void {
    this.subscriptions.push(
      this.caChecklistService.getCaDailyChecklist(id).subscribe(
        (response: any) => {
          this.caChecklist = response;
          console.log(response);
          
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
    );
  }

  escalate(){
    this.backToList();
  }

  backToList() {
    this.router.navigate(['cadcl/checklists/checklist']);
  }
}
