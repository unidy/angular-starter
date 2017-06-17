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
  
  constructor(private router: Router, private authService: AuthService) {
  }
  
  ngOnInit(): void {
    this.user = new User();
    this.user.id = 1;
    this.user.name = 'John';
    this.user.password = 'password';
    this.user.email = 'john@unidy.com';
  }
  
  login(): void {
    this.authService.login(this.user.name, this.user.password)
      .then(() => this.router.navigate([ this.authService.redirectUrl || "/home" ]));
  }
}
