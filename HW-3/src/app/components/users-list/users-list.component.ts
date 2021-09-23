import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user.model";
import {UserListService} from "../../shared/services/user-list.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList: User[] = [];

  constructor(private userService: UserListService) { }

  ngOnInit(): void {
    this.usersList = this.userService.getUserList();
  }

}
