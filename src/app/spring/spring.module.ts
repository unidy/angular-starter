import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpringComponent } from "./spring.component";
import { SpringService } from "./spring.service";
import { SpringRouter } from "./spring.router";

@NgModule({
  declarations: [
    SpringComponent
  ],
  imports: [
    CommonModule,
    SpringRouter
  ],
  providers: [
    SpringService
  ]
})
export class SpringModule { }
