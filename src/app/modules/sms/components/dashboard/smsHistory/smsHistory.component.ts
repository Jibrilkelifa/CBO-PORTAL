import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CMSDashboardService } from 'src/app/services/cms-services/cms-dashboard.service';
import { COBHistoryDTO } from 'src/app/models/cms-models/cob-history';
import { Message } from '../../../models/message';
import { BulkService } from '../../../services/bulk-message/bulk.service';
import { Summary } from '../../../models/summary';
@Component({
  selector: 'app-cobHistory',
  templateUrl: './smsHistory.component.html',
  styleUrls: ['./smsHistory.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SMSHistoryComponent {
  public cobHistory: COBHistoryDTO;
  private subscription: Subscription;
  public messages: Message[]; // Assuming you have an array of Message objects
  public totalCost: number = 0; 
  public summary: Summary;
  

  constructor(private cobHistoryService: CMSDashboardService,private bulkService:BulkService) {}

  ngOnInit() {
    // this.getCOBHistory();
    // this.getMessages();
    this.getSummary();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  getSummary(): void {
    console.log("hello jibril");
    
    this.subscription = this.bulkService.getSummary().subscribe(
      (response: Summary) => {
        console.log("rrrrrrr", response);

        this.summary = response;
        console.log("kalil", this.summary);
        
        // const senderName = localStorage.getItem('name');
        // this.calculateTotalCost(senderName); // Calculate the total cost for the retrieved sender name
      },
      (error) => {
        console.error('Failed to get messages:', error);
      }
    );
  }

  // calculateTotalCost(senderName: string): void {
  //   const filteredMessages = this.messages.filter(message => message.userName === senderName);
  //   this.totalCost = filteredMessages.reduce((total, message) => total + message.cost, 0);
  // }

  // getCOBHistory(): void {
  //   this.subscription = this.cobHistoryService.getCOBHistory().subscribe(
  //     (response: COBHistoryDTO) => {
  //       this.cobHistory = response;
  //       if (this.cobHistory.initialJTAnalyzed) {
  //         this.cobHistory.initialJTAnalyzed = this.formatDate(
  //           this.cobHistory.initialJTAnalyzed
  //         );
  //       }
  //       if (this.cobHistory.latestRecordedJTAnalyzed) {
  //         this.cobHistory.latestRecordedJTAnalyzed = this.formatDate(
  //           this.cobHistory.latestRecordedJTAnalyzed
  //         );
  //       }
  //     },
  //     (error) => {
  //       console.error('Failed to get COB history:', error);
  //     }
  //   );
  // }

  // formatDate(dateString: string): string {
  //   if (dateString && dateString.length >= 11) {
  //     const year = dateString.substring(3, 7);
  //     const month = dateString.substring(7, 9);
  //     const day = dateString.substring(9, 11);
  //     const date = new Date(`${year}-${month}-${day}`);

  //     return `${date.getDate()} ${date.toLocaleString('default', {
  //       month: 'long',
  //     })} ${date.getFullYear()}`;
  //   } else {
  //     console.error(`Invalid date string: ${dateString}`);
  //     return dateString;
  //   }
  // }
 }
