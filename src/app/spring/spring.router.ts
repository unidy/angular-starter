import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpringComponent } from "./spring.component";

export const routes: Routes = [
  {
    path: '',
    component: SpringComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [
  ],
  exports: [
    RouterModule
  ]
})
export class SpringRouter {

}
