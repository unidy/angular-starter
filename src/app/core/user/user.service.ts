import { Injectable } from '@angular/core';
import { User } from "./user.model";
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private user: User;
  private users: Array<User>;
  private readonly serverUrl = 'http://localhost:8080/mysql';
  
  constructor(private http: Http) {
    this.users = new Array<User>();
    this.user = new User(1, "demo", "demo", "demo@unidy.com");
    this.users.push(this.user);
    this.users.push(new User(2, "john", "john", "john@unidy.com"));
  }

  public addUser(user: User): User {
    return user;
  }
  
  public getAll(): Promise<User[]> {
    return this.http
      .get(this.serverUrl + "/all")
      .toPromise()
      .then(function (res) {
        return res.json() as User[];
      })
    .catch(this.handleError);
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
  
  private handleError(error: any): Promise<any> {
    console.log(error);
    return Promise.reject(error.message || error);
  }
}
