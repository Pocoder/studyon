import { Component, OnInit, Inject } from '@angular/core';
import { Studyon } from '../shared/studyon';
import { StudyonsService } from '../services/studyons.service';
import { NgForm } from '@angular/forms';
import {User} from '../shared/user';

@Component({
  selector: 'app-studyons',
  templateUrl: './studyons.component.html',
  styleUrls: ['./studyons.component.scss']
})
export class StudyonsComponent implements OnInit {
  studyons: Studyon[];
  errMess: string;
  studyon = { title: ''};

  constructor(private studyonService: StudyonsService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.studyonService.getStudyons(this.studyon.title)
      .subscribe(studyons => this.studyons = studyons,
        errMess => this.errMess = errMess);
  }
}
