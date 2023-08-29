import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorityDTO } from 'src/app/models/sasv-models/authorityDTO';
import { AuthorityC } from 'src/app/models/sasv-models/authorityC';
import { AuthorityService } from 'src/app/services/sasv-services/authority.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {
  bluredimage1: boolean = false;
  bluredimage2: boolean = false;
  dbStampImage: any;
  dbSignImage: any;
  postResponse: any;

  constructor(
    private authorityService: AuthorityService,
    private router: Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    let x = this.activatedRoute.snapshot.paramMap.get("id");
    let y: number = +x;
    if (y) {
      this.getAuthImage(y);
    }
  }

  public authorityR: AuthorityDTO[] = [];
  public authorityC: AuthorityC | any;

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
    this.authorityService.getAuthImage(id).subscribe(
      (response: AuthorityC) => {
        this.postResponse = response;
        this.dbStampImage = 'data:image/jpeg;base64,' + this.postResponse.stamp;
        this.dbSignImage = 'data:image/jpeg;base64,' + this.postResponse.signature;
      },
      (error: HttpErrorResponse) => {

      }
    );
  }
}

