import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Day')
  });
  public allUsers: number;
  public allAuths: number;
  public activeAuth: number;
  public numberofNewUsers: number;
  public femalepercent: number;
  public malepercent: number;
  public adminV: number;
  public userV: number;
  public directorV: number;
  public timeAgo: number;
  timeNow: Date;
  nowsec: number;

  ngOnInit(): void {
    if (!localStorage.getItem('isReloaded')) {
      localStorage.setItem('isReloaded', 'true');
      window.location.reload();
    } else {
      localStorage.removeItem('isReloaded');
    }
  }

}
