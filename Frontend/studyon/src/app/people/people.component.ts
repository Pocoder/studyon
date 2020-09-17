import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../shared/user';
import { UsersService } from '../services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  users: User[];
  errMess: string;
  user = { username: ''};
  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.getUsers(this.user.username)
      .subscribe(users => this.users = users,
        errMess => this.errMess = errMess);
  }
}
