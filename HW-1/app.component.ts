import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-course-app';
  usersList: string[] = ['Leanne Graham', 'Kurtis Weissnat', 'Clementine Bauch', 'Patricia Lebsack', 'Mrs. Dennis Schulist'];
}
