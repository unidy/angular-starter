import { Component, Input, OnInit } from '@angular/core';
import { User } from "../../core/user/user.model";
import { UserService } from "../../core/user/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  user: User;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  
  saveOrUpdate(): void {
    this.userService.create(this.user)
      .then(user => this.user = user);
  }
}
