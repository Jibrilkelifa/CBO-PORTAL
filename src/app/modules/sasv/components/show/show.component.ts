import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthorityService } from '../../services/authority-service/authority.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { AuthorityDTO } from '../../models/authority';
import { SignatureService } from '../../services/signature-service/signature.service';
import { StampService } from '../../services/stamp-service/stamp.service';
import { SignatureDTO } from '../../models/signature';
import { StampDTO } from '../../models/stamp';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent {
  bluredimage1: boolean = false;
  bluredimage2: boolean = false;
  dbStampImage: any;
  dbSignImage: any;
  postResponse: any;

  recievedData: any;
  signatureImage: boolean = false;
  stampImage: boolean = false;

  constructor(
    private authorityService: AuthorityService,
    private signatureService: SignatureService,
    private stampService: StampService,
    private config: DynamicDialogConfig,
  ) {}

  ngOnInit() {
    if (this.config.data?.data) {
      this.recievedData = this.config.data.data;
    }
    if (this.config.data?.title == 'authority') {
      this.signatureImage = true;
      this.stampImage = true;
      this.getAuthImage(this.recievedData.id);
    }
    if (this.config.data?.title == 'signature') {
      this.signatureImage = true;
      this.getSignatureImage(this.recievedData.id);
    }
    if (this.config.data?.title == 'stamp') {
      this.stampImage = true;
      this.getStampImage(this.recievedData.id);
    }
  }

  showBlurred1(): void {
    this.bluredimage1 = !this.bluredimage1;
  }

  deleteBlurred1(): void {
    this.bluredimage1 = !this.bluredimage1;
  }

  showBlurred2(): void {
    this.bluredimage2 = !this.bluredimage2;
  }

  deleteBlurred2(): void {
    this.bluredimage2 = !this.bluredimage2;
  }

  public getAuthImage(id: number) {
    this.authorityService.getAuthorityImage(id).subscribe(
      (response: AuthorityDTO) => {
        this.postResponse = response;
        this.dbStampImage = 'data:image/jpeg;base64,' + this.postResponse.stamp;
        this.dbSignImage =
          'data:image/jpeg;base64,' + this.postResponse.signature;
      },
      (error: HttpErrorResponse) => {}
    );
  }

  public getSignatureImage(id: number) {
      this.signatureService.getSignatureImage(id).subscribe(
      (response: SignatureDTO) => {
        this.postResponse = response;
        this.dbSignImage =
          'data:image/jpeg;base64,' + this.postResponse.signature;
      },
      (error: HttpErrorResponse) => {}
    );
  }

  public getStampImage(id: number) {
    this.stampService.getStampImage(id).subscribe(
      (response: StampDTO) => {
        this.postResponse = response;
        this.dbStampImage = 'data:image/jpeg;base64,' + this.postResponse.stamp;
      },
      (error: HttpErrorResponse) => {}
    );
  }
}
