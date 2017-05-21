import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Film catalog';

  links = [
    { path: '/dashboard', icon: 'home', label: 'Home'},
    { path: '/filmList', icon: 'list', label: 'All films'},
    { path: '/profile', icon: 'account_circle', label: 'Profile'}
  ];
}
