import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Memo } from '../../../../services/memo-services/memo';
import { MemoService } from '../../../../services/memo-services/memo.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  public memo: Memo;
  constructor(private memoService: MemoService, private router: Router) { }
  public getMemosById(x: any): void {
  
    this.memoService.getMemosById(x).subscribe((response: any) => {
  
      this.memo = response;
      this.memoService.memos = response;


    },
      (error: HttpErrorResponse) => {

      });
  }

  public gotoletter() {
    this.router.navigate(['Memo/letter']);
  }
}
