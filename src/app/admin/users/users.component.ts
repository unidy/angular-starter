import { Component, OnInit } from '@angular/core';
import { User } from "../../core/user/user.model";
import { UserService } from "../../core/user/user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];
  user: User;
  selectedUser: User;
  
  constructor(private router: Router, private route: ActivatedRoute,private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().then(users => this.users = users);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }
}
