import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRouter } from "./app.router";
import { LoginModule } from "./login/login.module";
import { NavbarModule } from "./navbar/navbar.module";
import { HomeModule } from "./home/home.module";
import { CoreModule } from "./core/core.module";
import { SpringComponent } from './spring/spring.component';
import { SpringModule } from "./spring/spring.module";
import { AdminModule } from "./admin/admin.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter,
    CoreModule,
    NavbarModule,
    LoginModule,
    HomeModule,
    SpringModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
