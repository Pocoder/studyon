import { Component, OnInit, Inject } from '@angular/core';
import { Studyon } from '../shared/studyon';
import { StudyonsService } from '../services/studyons.service';
import { UsersService } from '../services/users.service';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-studyons',
  templateUrl: './studyons.component.html',
  styleUrls: ['./studyons.component.scss']
})
export class StudyonsComponent implements OnInit {
  myStudyons: Studyon[];
  studyons: Studyon[];
  errMess1: string;
  errMess2: string;
  studyon = { title: ''};
  newStudyon = { title: ''};

  constructor(private studyonService: StudyonsService,
              private userService: UsersService,
              private authService: AuthService) { }

  ngOnInit() {
      this.userService.getMyStudyons()
        .subscribe(studyons => {
          this.myStudyons = studyons;
        }, errMess => this.errMess1 = errMess);
  }

  createNewStudyon() {
    this.errMess1 = undefined;
    this.studyonService.createStudyon(this.newStudyon)
      .subscribe(studyon => this.myStudyons.push(studyon), errMess => this.errMess1 = errMess);
  }

  onSubmit() {
    this.errMess2 = undefined;
    this.studyonService.getStudyons(this.studyon.title)
      .subscribe(studyons => this.studyons = studyons,
        errMess => this.errMess2 = errMess);
  }
}
