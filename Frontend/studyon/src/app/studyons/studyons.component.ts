import { Component, OnInit, Inject } from '@angular/core';
import { Studyon } from '../shared/studyon';
import { StudyonsService } from '../services/studyons.service';
import { UsersService } from '../services/users.service';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user';

@Component({
  selector: 'app-studyons',
  templateUrl: './studyons.component.html',
  styleUrls: ['./studyons.component.scss']
})
export class StudyonsComponent implements OnInit {
  myStudyons: Studyon[];
  studyons: Studyon[];
  errMess: string;
  studyon = { title: ''};
  newStudyon = {title: ''};

  constructor(private studyonService: StudyonsService,
              private userService: UsersService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.studyonService.getStudyons(this.studyon.title)
      .subscribe(studyons => this.studyons = studyons,
        errMess => this.errMess = errMess);
  }

  createNewStudyon() {
    this.studyonService.createStudyon(this.newStudyon)
      .subscribe(studyon => this.newStudyon = <Studyon>studyon);
  }
}
