import { Injectable } from '@angular/core';
import { AuthService } from "./auth.service";
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, NavigationExtras, Route, Router,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad{
  
  
  constructor(private router: Router, private authService: AuthService) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkToken(state.url);
  }
  
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
    
  }
  
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkToken(`/${route.path}`);
  }
  
  private checkToken(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }
    
    this.authService.redirectUrl = url;
    
    let sessionId = 123456789;
    
    let navigationExtras: NavigationExtras = {
      queryParams: {'session_id': sessionId},
      fragment: 'anchor'
    }
    
    this.router.navigate(['/login'], navigationExtras);
    return false;
  }
}
