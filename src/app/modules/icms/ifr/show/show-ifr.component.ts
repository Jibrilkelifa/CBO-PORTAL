// import { HttpErrorResponse } from '@angular/common/http';
// import { Component } from '@angular/core';
// import { DynamicDialogConfig } from 'primeng/dynamicdialog';
// import { IFRService } from 'src/app/services/icms-services/ifr-services/ifr.service';
// import jsPDF from 'jspdf';

// @Component({
//   selector: 'app-show',
//   templateUrl: './show-ifr.component.html',
//   styleUrls: ['./show-ifr.component.scss'],
// })
// export class ShowIFRComponent {
//   bluredimage1: boolean = false;
//   bluredimage2: boolean = false;

//   dbIfrImage: any;
//   postResponse: any;

//   recievedData: any;
//   contentType : any;
//   ifrImage: boolean = false;

//   constructor(
//     private iFRService: IFRService,
//     private config: DynamicDialogConfig,
//   ) {}

//   ngOnInit() {
//     if (this.config.data) {
//       this.recievedData = this.config.data.data;
//       this.getAuthImage(this.recievedData.id);
//     }
//   }

//   showBlurred1(): void {
//     this.bluredimage1 = !this.bluredimage1;
//   }

//   deleteBlurred1(): void {
//     this.bluredimage1 = !this.bluredimage1;
//   }

//   public getAuthImage(id: number) {
//     this.iFRService.getImage(id).subscribe(
//       (response: any) => {
//         console.log('Response:', response);

//         const fileName = response.fileName;
//         this.dbIfrImage = response.file;
//         this.contentType = response.contentType;
//         this.ifrImage = true;
//       },
//       (error: HttpErrorResponse) => {
//         console.log('Error:', error);
//         // Handle any errors that occur
//       }
//     );
//   }

//   // public isImageFile(fileData: string): boolean {
//   //   return fileData.startsWith('data:image');
//   // }
//   public isOctetStream(fileData: string): boolean {
//     return fileData === 'application/octet-stream';
//   }

//   // public downloadFile() {
//   //   const link = document.createElement('a');
//   //   link.href = 'data:application/octet-stream;base64,' + this.dbIfrImage;
//   //   link.download = 'downloaded_file';
//   //   link.target = '_blank';
//   //   link.click();
//   // }

//   public downloadFile(fileUrl: string): void {
//     const link = document.createElement('a');
//     link.href = fileUrl;
//     link.target = '_blank';
  
//     // Extract the original file name from the URL
//     const fileName = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
  
//     link.download = fileName; // Use the original file name for the download
//     link.click();
//   }
// }




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
  contentType : any;

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
         console.log("jibrilllllllllllll",response.fileData);
      this.postResponse = response;
      const contentType = response.contentType;
      const fileData = response.fileData;
      const isImage = /^image\/|^application\/octet-stream/.test(contentType);

      // if (isImage) {
      //   // For image types, create a data URL
      //    this.dbIfrImage = URL.createObjectURL(fileData);
      //    console.log("dieieie:",this.dbIfrImage);
      
      //   this.ifrImage = true;
      // } 
      if (isImage) {
        const fileReader = new FileReader();
        fileReader.onload = (event: any) => {
          this.dbIfrImage = event.target.result;
          console.log("dbIfrImage:", this.dbIfrImage);
          this.ifrImage = true;
        };
        fileReader.readAsDataURL(fileData);
      }
      else {
        // For non-image types, store the file data to enable downloading
        const blob = new Blob([fileData], { type: contentType });
        this.dbIfrImage = URL.createObjectURL(blob);
        this.ifrImage = true;
      }

      this.contentType = contentType;
    },
    (error: HttpErrorResponse) => {
      console.log("Error:", error);
    }
  );
}
  
public isImageFile(fileData: string): boolean {
  return fileData.startsWith('data:image');
}
public isOctetStream(contentType: string): boolean {
  return contentType.startsWith('image/');
}
  public downloadFile(fileUrl: string): void {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';
    
  
    // Extract the original file name from the URL
    const fileName = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
    
    link.download = fileName; // Use the original file name for the download
    link.click();
    }

 
}
