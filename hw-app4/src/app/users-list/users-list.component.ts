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
  constructor(private userService: UserListService) {}

  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();
  }
  search(query: string) {
    console.log(query);
  }
}
