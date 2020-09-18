import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UsersService } from '../services/users.service';

import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Studyon } from '../shared/studyon';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  errMess: string;

  constructor(private route: ActivatedRoute,
              private userService: UsersService) { }

  ngOnInit() {
    this.route.params.pipe(switchMap((params: Params) => this.userService.getUser(params['id']) ))
      .subscribe(user => {
          this.user = user;
          console.log(this.user);
      },
          errmess => this.errMess = <any>errmess);
  }

}
