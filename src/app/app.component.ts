import { Component } from '@angular/core';
import {Greeting} from "./spring/models/Greeting";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  
  constructor(){
  
  }
  
}
