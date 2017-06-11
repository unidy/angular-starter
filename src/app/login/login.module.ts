import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { LoginComponent } from "./login.component";
import { LoginRouter } from "./login.router";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    LoginRouter
  ],
  providers: [
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule {

}
