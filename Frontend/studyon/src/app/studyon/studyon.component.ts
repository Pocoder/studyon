import {Component, OnInit, ViewChild} from '@angular/core';
import { User} from '../shared/user';
import { Studyon} from '../shared/studyon';
import { ActivatedRoute, Params} from '@angular/router';
import { UsersService} from '../services/users.service';
import { StudyonsService} from '../services/studyons.service';
import { switchMap} from 'rxjs/operators';
import { Discussion } from '../shared/discussion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Message } from '../shared/message';

@Component({
  selector: 'app-studyon',
  templateUrl: './studyon.component.html',
  styleUrls: ['./studyon.component.scss']
})
export class StudyonComponent implements OnInit {
  @ViewChild('mform') commentFormDirective;
  studyon: Studyon;
  curChat: Discussion;
  errMess: string;
  message: Message;

  formErrors = {
    'comment': ''
  };
  validationMessages = {
    'comment': {
      'required':      'Comment is required.'
    }
  };
  messageForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private studyonService: StudyonsService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.route.params.pipe(switchMap((params: Params) => this.studyonService.getStudyon(params['id']) ))
      .subscribe(studyon => {
          this.studyon = studyon;
        },
        errmess => this.errMess = <any>errmess);
  }

  createForm() {
    this.messageForm = this.fb.group({
      text: ['', Validators.required]
    });

    this.messageForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.messageForm) { return; }
    const form = this.messageForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.studyonService.postMessage(this.studyon._id, this.curChat._id, this.messageForm.value)
      .subscribe(discussion => this.curChat = <Discussion>discussion);
    this.commentFormDirective.resetForm();
    this.messageForm.reset({
      comment: ''
    });
  }

  openChat(newChat: Discussion) {
    this.studyonService.getChat(this.studyon._id, newChat._id)
      .subscribe(chat => this.curChat = chat);
  }

  createChat() {
    this.studyonService.createChat(this.studyon._id)
      .subscribe(chat => {
        this.curChat = chat;
        this.studyon.discussions.push(this.curChat);
      });
  }
}
