import { Injectable } from '@angular/core';
import { User } from '../shared/user';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Studyon } from '../shared/studyon';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getUsers(username: string): Observable<User[]> {
    if (username === '') {
      return this.http.get<User[]>(baseURL + `users`)
        .pipe(catchError(this.processHTTPMsgService.handleError));
    } else {
      return this.http.get<User[]>(baseURL + `users?username=${username}`)
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(baseURL + 'users/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getStudyonsOfUser(id: string): Observable<Studyon[]> {
    return this.http.get<User>(baseURL + 'users/' + id + '/studyons/')
      .pipe(map(user => user.studyons))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
