import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';
import { Http, Jsonp } from '@angular/http';
import { Injectable } from '@angular/core';
import { ApiService } from "./api.service";
import { User } from "../models/user";
import { Repository } from "../models/repository";

@Injectable()
export class GitHubService {

  constructor(private api: ApiService) { }

  getUser(filter: string): Observable<User> {
    if (!filter)
      Observable.throw('User name is not defined');

    let endPoint = '/users';
    return this.api.get(`${endPoint}/${filter}`)
      .map(res => res.json() as User)
      .catch(err => Observable.throw(err));
  }

  getRepositories(userName: string): Observable<Repository[]> {
    if (!userName)
      Observable.throw('User name is not defined');

    let endPoint = '/users';
    return this.api.get(`${endPoint}/${userName}/repos`)
      .map(res => res.json() as Repository[])
      .catch(err => Observable.throw(err));
  }

}
