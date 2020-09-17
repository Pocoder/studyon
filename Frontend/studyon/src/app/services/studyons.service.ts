import { Injectable } from '@angular/core';
import { Studyon } from '../shared/studyon';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class StudyonsService {
  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHTTPMsgService) { }

  getStudyons(title: string): Observable<Studyon[]> {
    if (title === '') {
      return this.http.get<Studyon[]>(baseURL + `studyons`)
        .pipe(catchError(this.processHTTPMsgService.handleError));
    } else {
      return this.http.get<Studyon[]>(baseURL + `studyons?title=${title}`)
        .pipe(catchError(this.processHTTPMsgService.handleError));
    }
  }

  getStudyon(id: string): Observable<Studyon> {
    return this.http.get<Studyon>(baseURL + 'studyons/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getMembersOf(id: string): Observable<User[]> {
    return this.http.get<User[]>(baseURL + 'studyons/' + id + '/members/')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  createStudyon(title: any): Observable<Studyon> {
    return this.http.post<Studyon>(baseURL + 'studyons/', title)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
