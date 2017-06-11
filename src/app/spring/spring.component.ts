import { Component, OnInit } from '@angular/core';
import { Greeting } from "./models/Greeting";
import { SpringService } from "./spring.service";

@Component({
  selector: 'app-spring',
  templateUrl: './spring.component.html',
  styleUrls: ['./spring.component.scss']
})
export class SpringComponent implements OnInit {
  private greeting: Greeting;
  
  constructor(private springService: SpringService) { }

  ngOnInit() {
    this.greeting = new Greeting(1, "greeting");
  }

  
}
