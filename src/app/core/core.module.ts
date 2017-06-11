import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from "./user/user.service";
import { AuthService } from "./auth/auth.service";
import { AuthGuardService } from "./auth/auth-guard.service";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuardService
  ],
  exports: [
  ]
})
export class CoreModule { }
