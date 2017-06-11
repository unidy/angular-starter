import { Component } from "@angular/core";
import { OnInit } from "@angular/core";

import { User } from "../core/user/user.model";
import { AuthService } from "../core/auth/auth.service";
import { Router } from "@angular/router";
import { UserService } from "../core/user/user.service";

@Component({
  selector: 'spring-login',
  templateUrl: 'login.component.html',
  styleUrls: [
    'login.component.scss'
  ]
})

export class LoginComponent implements OnInit {
  private user: User;
  
  constructor(private router: Router, private authService: AuthService, private userService: UserService) {
  }
  
  ngOnInit(): void {
    this.user = this.userService.create(1,"John", "password", "john@unidy.com");
  }
  
  login(): void {
    if (this.authService.login(this.user)) {
      this.router.navigate(['/home']);
    };
  }
}
