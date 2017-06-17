import { Injectable } from '@angular/core';
import { User } from "./user.model";
import { Http, RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private user: User;
  private users: User[];
  private readonly serverUrl = 'http://localhost:8080/mysql';
  
  constructor(private http: Http) {
    this.users = [];
  }
  
  public create(user: User): Promise<User> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    
    return this.http.post(this.serverUrl + '/create', user, options)
      .toPromise()
      .then((res) => res.json() as User)
      .catch(this.handleError);
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
  
  public login(name: string, password: string): Promise<User> {
    let params = "?name=" + name + "&password=" + password;
    
    return this.http.get(this.serverUrl + "/login" + params)
      .toPromise()
      .then((response) => response ? response.json() as User : null)
      .catch(this.handleError);
  }
  
  public getUser() {
    return this.user;
  }
  
  public setUser(user: User) {
    this.user = user;
  }
  
  private handleError(error: any): Promise<any> {
    console.log(error);
    return Promise.reject(error.message || error);
  }
}
