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

  //
  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  onSubmit(searchForm: NgForm) {
     this.userService.getUsers(searchForm.value.username)
      .subscribe(users => this.users = users,
        errMess => this.errMess = errMess);
  }
}
