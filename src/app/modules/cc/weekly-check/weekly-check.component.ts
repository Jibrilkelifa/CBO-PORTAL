import { Component } from '@angular/core';
import { Message } from 'primeng/api';
import { unWeeklyIntersection } from 'src/app/models/sanction-models/unWeeklyIntersection';
import { SanctionListService } from 'src/app/services/cc-services/sanction-list.service';


@Component({
  selector: 'app-weekly-check',
  templateUrl: './weekly-check.component.html',
  styleUrls: ['./weekly-check.component.scss']
})
export class WeeklyCheckComponent {
  loading = false;
  all_intersections: unWeeklyIntersection[];
  upload_url: string = localStorage.getItem('url_3')+"/api/v1/import-to-db";
  constructor(private sanctionListService: SanctionListService,) { }

  public onBeforeUpload() {
    this.loading = true;
  }

  public messages: Message[] = [];

  public onUpload() {
    this.loading = false;
    this.messages = [{ severity: 'success', summary: 'File Uploaded', detail: 'File has been uploaded successfully' }];
    this.getIntersection();
  }

  public onUploadError() {
    this.loading = false;
    this.messages = [{ severity: 'error', summary: 'File Upload Error', detail: 'An error occurred while uploading the file' }];
  }

  public getIntersection() {
    this.sanctionListService.getUnWeeklyIntersection().subscribe(data => {
      this.all_intersections = data;
    });
  }
}
