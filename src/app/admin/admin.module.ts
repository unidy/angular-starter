import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRouter } from "./admin.router";
import { AdminComponent } from "./admin.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./user/user.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AdminComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRouter
  ],
  providers: [
  ]
})
export class AdminModule { }
