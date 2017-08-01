import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalObjectsService } from "../../shared/services/global-objects.service";
import { User } from "../../shared/models/user";
import { Router } from '@angular/router';
import { Subscription } from "rxjs/Subscription";
import { Repository } from "../../shared/models/repository";
import { GitHubService } from "../../shared/services/git-hub.service";

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})
export class MainProfileComponent implements OnInit, OnDestroy {

  private userReceivedSubscription: Subscription;
  private user: User;
  private repos: Repository[];

  constructor(
    private router: Router,
    private gitHubService: GitHubService,
    private globalObjectsService: GlobalObjectsService
  ) { }

  ngOnInit() {
    this.userReceivedSubscription =
      this.globalObjectsService.user$
        .subscribe(data => {
          this.user = data;
        });
  }

  ngOnDestroy(): void {
    this.userReceivedSubscription.unsubscribe();
  }

}
