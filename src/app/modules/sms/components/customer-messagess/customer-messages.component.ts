import { Component, OnInit } from '@angular/core';
import { SentMessageService } from '../../services/sent-messages/sentMessageService';
import { BulkService } from '../../services/bulk-message/bulk.service';
import { Message } from '../../models/message'
import { Msg_to_sent } from '../../models/msg_to_sent';


@Component({
    selector: 'customer-messagess',
    templateUrl: 'customer-messagess.component.html',
})
export class CustomerMessagessComponent implements OnInit {
    msg_to_sent: Msg_to_sent[] = [];
    selectedMessages: any[] = [];
    successText: string;
   
    constructor(private bulkService:BulkService) { }

    ngOnInit() {
        this.fetchAllMessages();
    }
    fetchAllMessages() {
        this.bulkService.getCustomerMessages().subscribe(
          (response) => {
            this.messages = response;
            console.log('Messages:', this.messages);
           
        
          },
          (error) => {
            console.error('Error fetching messages:', error);
          }
        );
      }
   
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
          return 'Pending';
    
        case 1:
          return 'Delivered to phone';
        case 2:
            return 'Non-Delivered to Phone';
        case 4:
            return 'Queued on SMSC';
        case 16:
            return 'Non-Delivered to SMSC';
        case 8:
            return 'Delivered to phone';

    
        default:
          return null;
      }
    }
    
 

}
