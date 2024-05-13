import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { CADailyCheckList } from 'src/app/models/cadcl-models/ca-daily-checklist'
import { ChecklistService } from 'src/app/services/cadcl-services/checklist.service';
import { CreateComponent } from '../create/create.component';
import { DialogService } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';

interface ExportColumn {
  title: string;
  dataKey: string;
}

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

@Component({
  selector: 'app-view-checklist',
  templateUrl: './view-checklist.component.html',
  styleUrls: ['./view-checklist.component.scss']
})
export class ViewChecklistComponent {
  
  public caChecklists: CADailyCheckList[] = [];

  public caChecklistDisplay: any[] = [];

  private subscriptions: Subscription[] = [];

  exportColumns!: ExportColumn[];
  cols!: Column[];

  constructor(
    private caChecklistService: ChecklistService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private router:Router,
  ) {}

  ngOnInit() {
    this.getcaChecklists();
  }

  getcaChecklists(): void {
    this.subscriptions.push(
      this.caChecklistService.getCaDailyChecklists().subscribe(
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

  createNewcaChecklist(): void {
    const ref = this.dialogService.open(CreateComponent, {
      header: 'Create a new CAO Inquiry/Activity',
      width: '60%',
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });

    ref.onClose.subscribe((response: any) => {
      if (response.status) {
        this.getcaChecklists();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: response.message,
        });
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Failed',
          detail: response.message,
        });
      }
    });
  }

  viewHistory(id: number) {
    this.router.navigate(['cao/checklists/update/', id]);
  }

  updatecaChecklist(id: number): void {
    const caChecklist = this.caChecklists.find((check) => check.id === id);
    console.log("relation", caChecklist);
    const ref = this.dialogService.open(CreateComponent, {
      header: 'Update auditable area',
      width: '40%',
      data: { caChecklist },
      contentStyle: { 'min-height': 'auto', overflow: 'auto' },
      baseZIndex: 10000,
    });
    ref.onClose.subscribe((response: any) => {
      if (response) {
        this.caChecklists = this.caChecklists.map((check) =>
          check.id === response.id ? response : check
        );
        if (response.status) {
          this.getcaChecklists();
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: response.message,
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Failed',
            detail: response.message,
          });
        }
      }
    });
  }

  ngOnDestroy() {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
