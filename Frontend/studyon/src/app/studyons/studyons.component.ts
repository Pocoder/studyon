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

  constructor(private studyonService: StudyonsService,
              private userService: UsersService) { }

  ngOnInit() {
    this.userService.getStudyonsOfUser()
  }

  onSubmit() {
    this.studyonService.getStudyons(this.studyon.title)
      .subscribe(studyons => this.studyons = studyons,
        errMess => this.errMess = errMess);
  }
}
