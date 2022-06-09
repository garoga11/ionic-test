import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public allUsers: any;

  constructor(public UsersService: UsersService) { }

  ngOnInit(): void {
    this.allUsers = this.UsersService.getUsers();
  }

}
