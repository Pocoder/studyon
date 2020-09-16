import { Injectable } from '@angular/core';
import { User } from '../shared/user';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getUsers(username: string): Observable<User[]> {
    return this.http.get<User[]>(baseURL + `users?username=${username}`)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
