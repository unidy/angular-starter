import { Injectable, EventEmitter } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../user/user.model";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService implements CanActivate {
  private token: any;
  public isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  public redirectUrl: string;
  public loginEvent$: EventEmitter<User>;
  public logoutEvent$: EventEmitter<User>;
  
  constructor(private userService: UserService) {
    this.loginEvent$ = new EventEmitter<User>();
    this.logoutEvent$ = new EventEmitter<User>();
  }
  
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.isLoggedIn;
  }
  
  public login(name: string, password: string): Promise<User> {
    // this.isLoggedIn = true;
    return this.userService.login(name, password)
      .then(user => this.token = user)
      .then((user) => {
        this.loginEvent$.emit(user);
        this.isLoggedIn = true;
        return user;
      })
      .catch();
  }
  
  public logout(): void {
    this.isLoggedIn = false;
    this.userService.setUser(null);
    this.logoutEvent$.emit(null);
  }
  
  public getToken(): any {
    return this.token;
  }
  
  
}
