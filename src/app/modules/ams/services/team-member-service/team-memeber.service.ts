import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamMemberDTO } from 'src/app/modules/ams/models/team-member';
import { AuditScheduleDTO } from 'src/app/modules/ams/models/auditSchedule';
@Injectable({
  providedIn: 'root',
})
export class TeamMemberService {
  private httpOptions: any;
  private apiServiceUrl: any;
  private _savedAssignments: TeamMemberDTO[] = [];

  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }),
    };
    this.apiServiceUrl = 'http://10.1.125.58:8099';
  }

  constructor(private http: HttpClient) { }

  get savedAssignments(): TeamMemberDTO[] {
    return this._savedAssignments;
  }

  set savedAssignments(assignments: TeamMemberDTO[]) {
    this._savedAssignments = assignments;
  }

  public getTeamMemberByUserId(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/teamMember/byUserId`,
      this.httpOptions
    );
  }

  public getTeamMemberById(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/teamMember/findById`,
      this.httpOptions
    );
  }

  public getTeamMemberBySchedule(): Observable<any> {
    this.init();
    return this.http.get<any>(
      `${this.apiServiceUrl}/ams/teamMember/bySchedule`,
      this.httpOptions
    );
  }


  public addTeamMember(auditSchedule: AuditScheduleDTO): Observable<any> {
    this.init();
    return this.http.post(
      `${this.apiServiceUrl}/ams/teamMember/register`,
      auditSchedule,
      this.httpOptions
    );
  }

  public updateTeamMember(teamMember: TeamMemberDTO[]): Observable<any> {
    this.init();
    return this.http.post(`${this.apiServiceUrl}/ams/teamMember/update`, teamMember, this.httpOptions)
  }

}
