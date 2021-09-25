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
    //для теста поля username
    setTimeout(() => {
      this.username = 'ZZZZZ';
    }, 2000);
  }
  search(query: string) {
    this.usersList = this.userService.findUser(query);
  }
  sort(direction: string) {
    // console.log(direction);

    this.usersList = this.userService.sortUsers(direction);
  }
}
