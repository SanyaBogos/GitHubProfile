import { Injectable } from '@angular/core';
import { User } from "../models/user";
import { Subject } from "rxjs/Subject";
import { Repository } from "../models/repository";

@Injectable()
export class GlobalObjectsService {

  private userSource = new Subject<User>();
  // private repoSource = new Subject<Repository>();

  public user$ = this.userSource.asObservable();
  // public repo$ = this.repoSource.asObservable();

  constructor() { }

  announceUserSearched(user: User) {
    this.userSource.next(user);
  }

  // announceRepoSearched(repo: Repository) {
  //   this.repoSource.next(repo);
  // }

}
