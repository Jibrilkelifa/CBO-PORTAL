import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IFRService } from 'src/app/services/icms-services/ifr-services/ifr.service';

@Component({
  selector: 'app-show',
  templateUrl: './show-ifr.component.html',
  styleUrls: ['./show-ifr.component.scss'],
})
export class ShowIFRComponent {
  bluredimage1: boolean = false;
  bluredimage2: boolean = false;

  dbIfrImage: any;
  postResponse: any;

  recievedData: any;
  ifrImage: boolean = false;


  constructor(
    private iFRService: IFRService,
    private config: DynamicDialogConfig,
  ) { }

  ngOnInit() {    
    if (this.config.data) {
      this.recievedData = this.config.data.data; 
      this.getAuthImage(this.recievedData.id);     
    }
  }

  showBlurred1(): void {
    this.bluredimage1 = !this.bluredimage1;
  }

  deleteBlurred1(): void {
    this.bluredimage1 = !this.bluredimage1;
  }
  public getAuthImage(id: number) {
    this.iFRService.getImage(id).subscribe(
      (response: any) => {
        console.log("ndmsndmsndmsdnms",response);
        console.log("ndmsndmsndmsdnms",response.file);
        
        // // Extract the image data from the response
        // const imageBytes = new Uint8Array(response.body);
  
        // // Convert the image data to base64
        // const base64Image = btoa(String.fromCharCode(...imageBytes));
  
        // Construct the data URL with the extracted content type and base64 image data
        this.postResponse = response;
        this.dbIfrImage =
          'data:image/jpeg;base64,' + this.postResponse.file;
          this.ifrImage=true;
      },
      (error: HttpErrorResponse) => {
        console.log("Error:", error);
        // Handle any errors that occur
      }
    );
  }
}
