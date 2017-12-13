import { Injectable } from '@angular/core';
import{BehaviorSubject} from 'Rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GitService {
  user=new BehaviorSubject([]);
  constructor(private _http:HttpClient) { }
  getScoreOf(username){
    this._http.get(`https://api.github.com/users/${username}`).subscribe((user:any[])=>{this.user.next(user);});
  }
}
   