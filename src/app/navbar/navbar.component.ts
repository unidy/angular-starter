import { Component, OnInit, Input } from '@angular/core';
import { User } from "../core/user/user.model";
import { AuthService } from "../core/auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() user: User;
  
  constructor(private router: Router, private authService: AuthService) {
    authService.loginEvent$.subscribe((user: User) => this.updateUser(user));
  }

  ngOnInit() {
  
  }

  logout(): void {
    this.user = null;
    this.authService.logout();
    this.router.navigate(['/']);
  }
  
  private updateUser(user: User) {
    this.user = user;
  }
}
