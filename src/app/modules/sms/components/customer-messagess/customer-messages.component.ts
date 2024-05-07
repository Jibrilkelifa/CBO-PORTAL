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
  isAuthorized: boolean = false;
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
            this.msg_to_sent = response;
            console.log('Messages:', this.msg_to_sent);
           
        
          },
          (error) => {
            console.error('Error fetching messages:', error);
          }
        );
      }
      authorizeMessage(messageId: number) {
        this.bulkService.authorizeMessage(messageId).subscribe(
          
            (response) => {
              this.isAuthorized = true;
                console.log('Message authorized successfully:', response);

                this.fetchAllMessages(); // Refresh the list of messages after authorization
            },
            (error) => {
                console.error('Error authorizing message:', error);
            }
        );
    }
    
    getSeverity(isAuthorized: boolean): string {
      switch (isAuthorized) {
        case false:
          return 'danger';
    
        case true:
          return 'success';
    
        default:
          return null;
      }
    }
    getDisplayLabel(isAuthorized: boolean): string {
      switch (isAuthorized) {
        case false:
          return 'Unauthorized';
    
        case true:
          return 'Authorized';
        default:
          return null;
      }
    }
    
 

}
