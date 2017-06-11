import { Component, OnInit } from '@angular/core';
import { User } from "../../core/user/user.model";
import { UserService } from "../../core/user/user.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Array<User>;
  user: User;
  selectedUser: User;
  
  constructor(private router: Router, private route: ActivatedRoute,private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().then(users => this.users = users);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
    // this.router.navigate([user.id], { relativeTo: this.route });
  }
}
