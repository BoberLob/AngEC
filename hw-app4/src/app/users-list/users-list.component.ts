import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserListService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  usersList: User[] = [];
  username: string = '';
  lastname: string = '';
  role: string = '';
  constructor(private userService: UserListService) {}

  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();
  }

  search(query: string) {
    this.usersList = this.userService.findUser(query);
  }

  sort(direction: string) {
    // console.log(direction);

    this.usersList = this.userService.sortUsers(direction);
  }

  addUser() {
    // console.log(this.lastname, this.role);

    this.userService.addUser({
      id: Math.floor(Math.random() * 6 + 10),
      name: this.username,
      username: this.lastname,
      email: '',
      role: this.role,
      phone: '',
      website: '',
    });
    this.usersList = this.userService.getUsersList();
  }
}
