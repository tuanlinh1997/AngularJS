import { Component, OnInit } from '@angular/core';
import { UsersService } from './core/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'movies-project';

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.getUserFormLocalStorage();
  }
}
