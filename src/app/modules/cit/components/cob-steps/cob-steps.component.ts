import { Component } from '@angular/core';
import { CitIntegrationService } from '../../services/cit.integration.service';
import { ClipboardService } from 'ngx-clipboard';
import { HttpErrorResponse } from '@angular/common/http';
import { Step } from '../../models/stepDTO';
import { SecurityServiceService } from '../../services/security-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cob-steps',
  templateUrl: './cob-steps.component.html',
  styleUrls: ['./cob-steps.component.scss']
})
export class CobStepsComponent {
  tag="";

    constructor(private router:Router,private securityService:SecurityServiceService,private clipboardService: ClipboardService,private service:CitIntegrationService) { 
 
  
    }
    username = (localStorage.getItem("name"));

  ngOnInit():void{
       
    if(this.securityService.hasRole("ROLE_CIST_ADMIN")){ }
    else{
     this.router.navigate(['login']);
    }
  }
  collapse(tag:string){
    if (this.tag == tag){
      this.tag="";
    }
    else
    {this.tag=tag;}
  }
    copyToClipboard(text: string) {
     
        this.clipboardService.copyFromContent(text);
   
   let step:Step={id:-1,type:"copied",userName:this.username,dateTime:new Date('2024-02-04T10:35:26.000Z'),commandCopied:text};
      console.log("Text copied to clipboard:", text);
    this.service.copyRecord(step).subscribe(
      (response: any) => {
      
      
        if (response.message != "success"){
          alert("something went wrong, Please try again later")
        }
        console.log(response,this.username);
        
  
        
      },
      (error: HttpErrorResponse) => { alert(error.message ); }
  
  
  
  
  
  
    );
      
        
      
    }
    checkBox(text: string) {
     
    
 
 let step:Step={id:-1,type:"checked",userName:this.username,dateTime:new Date('2024-02-04T10:35:26.000Z'),commandCopied:text};
    
  this.service.copyRecord(step).subscribe(
    (response: any) => {
    
    
      if (response.message != "success"){
        alert("something went wrong, Please try again later")
      }
      console.log(response,this.username);
      

      
    },
    (error: HttpErrorResponse) => { alert(error.message ); }






  );
    
      
    
  }
  
  
  

}
