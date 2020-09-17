import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user';
import {Studyon} from '../shared/studyon';
import {ActivatedRoute, Params} from '@angular/router';
import {UsersService} from '../services/users.service';
import {StudyonsService} from '../services/studyons.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-studyon',
  templateUrl: './studyon.component.html',
  styleUrls: ['./studyon.component.scss']
})
export class StudyonComponent implements OnInit {
  studyon: Studyon;
  errMess: string;

  constructor(private route: ActivatedRoute,
              private studyonService: StudyonsService) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params: Params) => this.studyonService.getStudyon(params['id']) ))
      .subscribe(studyon => {
          this.studyon = studyon;
        },
        errmess => this.errMess = <any>errmess);
  }

}
