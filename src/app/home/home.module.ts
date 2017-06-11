import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { HomeRouter } from "./home.router";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRouter
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule {
}
