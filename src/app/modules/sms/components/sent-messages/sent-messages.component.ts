import { Component, OnInit } from '@angular/core';
import { SentMessageService } from '../../services/sent-messages/sentMessageService';
import { BulkService } from '../../services/bulk-message/bulk.service';
import { Message } from '../../models/message'


@Component({
    selector: 'sent-messages',
    templateUrl: 'sent-messages.component.html',
})
export class SentMessagesComponent implements OnInit {
    messages: Message[] = [];
    selectedMessages: any[] = [];
    successText: string;
   
    constructor(private bulkService:BulkService) { }

    ngOnInit() {
        this.fetchAllMessages();
    }
    fetchAllMessages() {
        this.bulkService.getAllMessages().subscribe(
          (response) => {
            this.messages = response;
            console.log('Messages:', this.messages);
           
        
          },
          (error) => {
            console.error('Error fetching messages:', error);
          }
        );
      }
    // fetchAllMessages() {
    //     this.bulkService.getAllMessages().subscribe(
    //       (response) => {
    //         this.messages = response.map((message) => {
    //           if (Array.isArray(message.messageBatchDate) && message.messageBatchDate.length === 7) {
    //             const dateParts = message.messageBatchDate;
    //             const dateObject = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2], dateParts[3], dateParts[4], dateParts[5], dateParts[6]));
      
    //             // Format the date and time
    //             const options = { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric' };
    //             const formattedDate = dateObject.toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions);
      
    //             return {
    //               ...message,
    //               messageBatchDate: formattedDate
    //             };
    //           } else {
    //             return message;
    //           }
    //         });
      
    //         console.log('Messages:', this.messages);
    //       },
    //       (error) => {
    //         console.error('Error fetching messages:', error);
    //       }
    //     );
    //   }
      
    //   getSeverity(status: string) {
    //     switch (status) {
    //         case 'failed':
    //             return 'danger';
      
    //         case 'success':
    //             return 'success';
      
    //         case 'new':
    //             return 'info';
      
    //         case 'pending':
    //             return 'warning';
      
    //         case 'renewal':
    //             return null;
    //         default:
    //             return null;
    //     }
    // }
    getSeverity(status: number): string {
      switch (status) {
        case 0:
          return 'success';
    
        case 1:
          return 'success';
    
        case 2:
          return 'danger';
    
        case 3:
          return 'info';
    
        case 4:
          return 'renewal';
    
        default:
          return null;
      }
    }
    getDisplayLabel(status: number): string {
      switch (status) {
        case 0:
          return 'Delivered to phone';
    
        case 1:
          return 'Delivered to phone';
        case 2:
            return 'Non-Delivered to Phone';
        case 4:
            return 'Queued on SMSC';
        case 16:
            return 'Non-Delivered to SMSC';
        case 8:
            return 'Delivered to SMSC';

    
        default:
          return null;
      }
    }
    
 

}
