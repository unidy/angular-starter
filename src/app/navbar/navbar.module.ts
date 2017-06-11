import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { UserService } from "../core/user/user.service";

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule
  ],
  providers: [
    UserService
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule {
}
