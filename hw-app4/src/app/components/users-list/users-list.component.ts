import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { UserListService } from '../../shared/services/user-list.service';

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
  selectedList: any = null;

  constructor(private userService: UserListService) {}

  ngOnInit(): void {
    this.usersList = this.userService.getUserList();
  }

  userSearch(query: string) {
    console.log(query);
    this.usersList = this.userService.searchUser(query);
  }

  sort(direction: string) {
    this.usersList = this.userService.sortUsers(direction);
  }

  addUser() {
    let user = {
      id: 1,
      name: this.username,
      username: this.lastname,
      email: 'Sincere@april.biz',
      role: this.role,
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
    };
    this.userService.addUser(user);
    this.usersList = this.userService.getUserList();
  }

  selectItem(users: any) {
    this.selectedList = [];
    users.forEach((user) => this.selectedList.push(user));
    console.log(this.selectedList);
  }

  deleteUsers() {
    console.log(this.selectedList);
    this.userService.deleteUsers(this.selectedList);
    this.usersList = this.userService.getUserList();
  }
}
