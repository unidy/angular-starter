import { Component, OnInit } from '@angular/core';
import { User } from "../core/user/user.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users: Array<User>;
  
  constructor() { }

  ngOnInit() {
  
  }

}
