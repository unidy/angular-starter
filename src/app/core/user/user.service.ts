import { Injectable } from '@angular/core';
import { User } from "./user.model";
import { resolve } from "q";

@Injectable()
export class UserService {
  private user: User;
  private users: Array<User>;
  
  constructor() {
    this.users = new Array<User>();
    this.user = new User(1, "demo", "demo", "demo@unidy.com");
    this.users.push(this.user);
    this.users.push(new User(2, "john", "john", "john@unidy.com"));
  }

  public addUser(user: User): User {
    return user;
  }
  
  public getAll(): Promise<Array<User>> {
    return Promise.resolve(this.users);
  }
  
  public getUser(): Promise<User> {
    return Promise.resolve(this.user);
  }
  
  public setUser(user: User) {
    this.user = user;
  }
  
  public create(id: number, name: string, password: string, email: string): User {
    return new User(id, name, password, email);
  }
}
