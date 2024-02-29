import { Component } from '@angular/core';
import { unWeeklyIntersection } from 'src/app/models/sanction-models/unWeeklyIntersection';
import { SanctionListService } from 'src/app/services/cc-services/sanction-list.service';
import { Message } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { FormGroup, FormControl } from '@angular/forms';
import { Deliquent_ } from 'src/app/models/sanction-models/Deliquent_';
import { HttpErrorResponse } from '@angular/common/http';
import { TimeScale } from 'chart.js';
import { NbeBlackList } from 'src/app/models/sanction-models/nbeblacklist/NbeBlackList';



@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent {
  type: string;
  upload_url: string;
  file_type: string;
  title: string;
  instruction: string;
  back_end_url:string = "http://10.1.125.58:8083";
  position: string = 'center';
  isUserFound:boolean;
  acceptLabel:string;
  rejectLabel:string;
  placeHolderText:string;
  public date: Date;
  stateOptions: any[] = [{label: 'Id', value: true}, {label: 'Tin', value: false}];


  IdSelected: boolean = true;
  Accortin: string;


  constructor(private sanctionListService: SanctionListService,private route: ActivatedRoute, private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.route.params.subscribe(params => {
      if (params && params['type']) {
        this.type = params['type'];
        switch (this.type) {
          case 'uk':
            this.upload_url = this.back_end_url+ '/api/v1/import-uk-xml-to-db-atf';
            this.file_type = '.xml';
            this.title = 'Upload UK List';
            this.instruction = 'Select XML file that contains the UK delinquent list';
            break;
          case 'eu':
            this.upload_url =  this.back_end_url+ '/api/v1/import-eu-xml-to-db-atf';
            this.file_type = '.xml';
            this.title = 'Upload EU  List';
            this.instruction = 'Select XML file that contains the EU delinquent list';
            break;
          case 'nbe-block':
            this.upload_url = this.back_end_url+ '/api/v1/import-black_list-to-db-atf';
            this.file_type = '.csv';
            this.title = 'Upload NBE BLOCK List';
            this.instruction = 'Select Excel file that contains the NBE BLOCK list';
            break;
          case 'nbe-deliquent':
            this.upload_url = this.back_end_url+ '/api/v1/import-deliquent-to-db-atf';
            this.file_type = '.csv';
            this.title = 'Upload NBE Delinquent List';
            this.instruction = 'Select Excel file that contains the NBE delinquent list';
            break;
          case 'pep':
            this.upload_url =  this.back_end_url+ '/api/v1/import-pep-to-db-atf';
            this.file_type = '.csv';
            this.title = 'Upload PEP List';
            this.instruction = 'Select Excel file that contains the PEP list';
            break;
          case 'adverser':
            this.upload_url =this.back_end_url+ '/api/v1/import-adverser-to-db-atf';
            this.file_type = '.csv';
            this.title = 'Upload Adverser List';
            this.instruction = 'Select Excel file that contains the Adverser list';
            break;
          case 'deliquent':
            this.title = "Edit Deliquent File";
            this.placeHolderText = "Tin Number";
            this.Accortin = "tin_Account"
            break;
          case 'business':
            this.title = "Edit Business Contuinity";
            this.placeHolderText = "Account Number";
            this.Accortin = "account_number";
            break;
          default:
            // handle invalid type
            break;
        }
      }
    });


  }





  all_intersections: unWeeklyIntersection[];

  public onBeforeUpload() {
    this.loading = true;
  }

  public messages: Message[] = [];

  public onUpload() {
    this.loading = false;
    this.messages = [{ severity: 'success', summary: 'File Uploaded', detail: 'File has been uploaded successfully' ,life: 5000}];
    this.getIntersection();
  }

  public onUploadError() {
    this.loading = false;
    this.messages = [{ severity: 'error', summary: 'File Upload Error', detail: 'An error occurred while uploading the file' ,life:5000}];
  }

  public getIntersection() {
    this.sanctionListService.getUnWeeklyIntersection().subscribe(data => {
      this.all_intersections = data;
    });
  }

  selectedFile: File;
  loading: boolean = false;
  ConfirmationMessage = '';

  async someMethod(position,data) {
    const customerName = await this.getCustomerNameById(data);
    console.log(this.IdSelected);
    this.startDeleting(position,data);
  }

  startDeleting(position: string,data:any) {



    this.position = position;
    if(this.isUserFound){
      this.acceptLabel = "Yes";
      if(this.type == "deliquent"){
        this.ConfirmationMessage = "Do you want to delete  " + this.DeliquentCustomerNameGotById;
      } else if (this.type == "business"){
        this.ConfirmationMessage = "Do you want to delete "  + this.BusinessContinuityCustomerNameGotById
      }

      this.rejectLabel = "No"
    }  else {
      this.ConfirmationMessage = "Sorry We can't find custer with that id"
      this.rejectLabel = "OK"

    }

    this.confirmationService.confirm({
        message: this.ConfirmationMessage,
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        acceptLabel: this.acceptLabel,
        rejectLabel:this.rejectLabel,
        acceptVisible:this.isUserFound,
        accept: () => {


              this.deleteCustomer(data);

            this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' ,life:5000});
        },
        reject: (type: ConfirmEventType) => {
            switch (type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected',life:5000 });
                    break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled',life:5000 });
                    break;
            }
        },
        key: 'positionDialog'
    });
}
public createCustomer(data:any){
  data.value.rlog_create_user_name = localStorage.getItem('username');
  if (this.type == 'deliquent') {


    this.sanctionListService.postDeliquentCustomer(data.value).subscribe(
      (response:Deliquent_) => {

        this.messages = [{ severity: 'success', summary: 'Customer Add', detail: 'Customer Added Successfully' ,life:5000}];

      },
      (error:HttpErrorResponse) => {
      //  alert(error.message);
      this.messages = [{ severity: 'error', summary: 'Customer Add', detail: 'An error occurred while adding customer' ,life:5000}];
      }
   );
  } else if(this.type == 'business'){

        data.value.account_number = data.value.tin_Account;



           this.sanctionListService.postBusinessContinuityCustomer(data.value).subscribe(
             (response:NbeBlackList) => {

               this.messages = [{ severity: 'success', summary: 'Customer Add', detail: 'Customer Added Successfully' ,life:5000}];

             },
             (error:HttpErrorResponse) => {
             //  alert(error.message);
             this.messages = [{ severity: 'error', summary: 'Customer Add', detail: 'An error occurred while adding customer' ,life:5000}];
             }
          );
  }

}

public deleteCustomer(data:any){


  if(this.type == "deliquent"){
         if(this.IdSelected){
          this.sanctionListService.deleteDeliquentCustomer(data).subscribe(
            (response:Deliquent_) => {



            },
            (error:HttpErrorResponse) => {
             alert(error.message);
            }
         );
         } else{
          this.sanctionListService.deleteDeliquentCustomerByTin(data).subscribe(
            (response:Deliquent_) => {



            },
            (error:HttpErrorResponse) => {
             alert(error.message);
            }
         );
         }
  } else if (this.type == "business"){

    this.sanctionListService.deleteBusinessContinuityCustomer(data).subscribe(
      (response:NbeBlackList) => {



      },
      (error:HttpErrorResponse) => {
       alert(error.message);
      }
   );

  }


}

 DeliquentCustomerNameGotById:string;
 BusinessContinuityCustomerNameGotById:string;

 public async getCustomerNameById(data: any): Promise<string> {


  if (this.type == 'deliquent'){
    try {
      if(this.IdSelected){
        console.log("got this by id");
        const response = await this.sanctionListService.getDeliquentCustomerById(data).toPromise();
        this.DeliquentCustomerNameGotById = response;

        this.isUserFound = true;
        return this.DeliquentCustomerNameGotById;
      } else{
        console.log("got this by tin");
        const response = await this.sanctionListService.getDeliquentCustomerByTin(data).toPromise();
        this.DeliquentCustomerNameGotById = response;

        this.isUserFound = true;
        return this.DeliquentCustomerNameGotById;
      }


    } catch (error) {
      console.log(error);
     this.isUserFound = false;
      return "null";
    }
  } else if (this.type == 'business'){
    console.log("i swear i am trying to delete it")
    try {
      const response = await this.sanctionListService.getBusinessContinuityById(data).toPromise();
      this.BusinessContinuityCustomerNameGotById = response;

      this.isUserFound = true;
      return this.BusinessContinuityCustomerNameGotById;
    } catch (error) {
      console.log(error);
     this.isUserFound = false;
      return "null";
    }
  } else{
    return null;
  }
}

}
