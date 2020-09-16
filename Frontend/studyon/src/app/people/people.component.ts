import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../shared/user';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  users: User[];
  errMess: string;
  username: string;

  // private userService: UsersService,
  // @Inject('baseURL') private baseURL
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // this.userService.getUsers(this.username)
    //  .subscribe(users => this.users = users,
    //    errmess => this.errMess = errmess);
  }
}
