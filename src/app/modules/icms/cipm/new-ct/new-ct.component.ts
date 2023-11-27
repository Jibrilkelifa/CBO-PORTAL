import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CollateralTypeService } from '../../../../services/icms-services/cipm-services/ct.service';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, Message, MessageService } from 'primeng/api';
import { CollateralType } from '../../../../models/icms-models/cipm-models/collatoral-type';


@Component({
  selector: 'app-accordions',
  templateUrl: './new-ct.component.html',
  styleUrls: ['./new-ct.component.scss'],
  providers: [MessageService, ConfirmationService]
})

export class NewCTComponent implements OnInit {
  public cts: CollateralType[] = [];
  public ct: CollateralType;

  public collatoralTypes: CollateralType[] = [];
  selectedcollatoralType: CollateralType;

  update: boolean = false;
  newDiv: boolean = true;
  public idY: number;
  msgs: Message[] = [];
  value: string;
  organizationalUnitId: number = Number(localStorage.getItem('organizationalUnitId'));

  constructor(private messageService: MessageService, private collateralTypeService: CollateralTypeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getCTs();
    let x = this.activatedRoute.snapshot.paramMap.get("id");
    this.idY = +x;

    if (this.idY) {
      this.getCT(this.idY);
      this.update = true;
      this.newDiv = false;
    }
  }

  public getCTs(): void {
    this.collateralTypeService.getCollatoralTypes().subscribe(
      (response: CollateralType[]) => {
        this.cts = response;

      },
      (error: HttpErrorResponse) => {

      }
    );
  }

  public getCT(id: number): CollateralType {
    this.collateralTypeService.getCollatoralType(id).subscribe(
      (response: CollateralType) => {
        this.ct = response;

      },
      (error: HttpErrorResponse) => {

      }
    );
    return this.ct;
  }

  public addCT(addCTForm: NgForm): void {
    this.collateralTypeService.addCollatoralType(addCTForm.value).subscribe(
      (response: CollateralType) => {


        this.getCTs();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Collateral Type Added Successfully!"
        });
        setTimeout(() => {
        }, 1000);
      },
      (error: HttpErrorResponse) => {


      }
    );
  }

  public updateCT(updateCT: NgForm): void {
    this.collateralTypeService.updateCollatoralType(updateCT.value).subscribe(
      (response: CollateralType) => {
        this.getCTs();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: "Collateral Type Updated Successfully!"
        });
        setTimeout(() => {
        }, 1000);
      },

      (error: HttpErrorResponse) => {

      }
    );
  }
}
