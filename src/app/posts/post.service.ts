import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { User } from '../users';

import 'rxjs/add/operator/map';

import { Post, Comment } from './post';

@Injectable()
export class PostService {
  private _url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private _http:Http) { }

  getPosts(filter?):Observable<Post[]>{
    let url = this._url;

    if(filter && filter.userId){
      url += "?userId="+filter.userId;
    }
    
    return this._http.get(url)
        .map(request => request.json());
  }
  getComments(post:Post):Observable<Comment[]>{
    return this._http.get(this._url+"/"+post.id+"/comments")
        .map(request => request.json());
  }
}
