import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';

@Injectable()
export class UserService {
  private _url = "http://jsonplaceholder.typicode.com/users";

  constructor(private _http:Http) { }

  getUsers(){
    return this._http.get(this._url)
        .map(result => result.json());
  }

  addUser(user: User){
    return this._http.post(this._url, user)
        .map(result => result.json());
  }
  getUser(userId: string){
    return this._http.get(this._url+"/"+userId)
        .map(result => result.json());
  }
  updateUser(userId: string, user: User){
    return this._http.put(this._url+"/"+userId, user)
        .map(result => result.json());
  }
  deleteUser(user: User){
    return this._http.delete(this._url+"/"+user.id)
        .map(result => result.json());
  }

}
