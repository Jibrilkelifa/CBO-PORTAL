import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/sso-models/user';
import { RoleService } from '../sso-services/role.service';
import { TimeService } from '../sso-services/time.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private httpOptions;
  private apiServiceUrl;
  private formDataOptions;
  private init() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    this.formDataOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      })
    };
    this.apiServiceUrl = localStorage.getItem('url_1');
  }

  constructor(private http: HttpClient, private roleService: RoleService, private timeService: TimeService) { }

  public getUsers(): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/user/all`, this.httpOptions)
  }
  public getUser(id: number): Observable<any> {
    this.init();
    return this.http.get<any>(`${this.apiServiceUrl}/user/find/${id}`, this.httpOptions)
  }

  public addUser(user: FormData): Observable<any> {
    this.init();
    return this.http.post(`${this.apiServiceUrl}/user/add`, user, this.formDataOptions)
  }

  public updateUser(user: any): Observable<any> {
    this.init();

    return this.http.put<User>(`${this.apiServiceUrl}/user/update`, {
      id: user.id,
      username: user.username,
      password: user.password,
      createdAt: user.createdAt,
      updatedAt: new Date().toLocaleDateString(),
      active: user.active,
      employee: { id: user.employee.id },
      roles: [ user.roles ],
      branch: { id: user.branch.id },
    }, this.httpOptions)
  }
  public deleteUser(userId: number): Observable<any> {
    this.init();
    return this.http.delete<void>(`${this.apiServiceUrl}/user/delete/${userId}`, this.httpOptions)
  }
}
