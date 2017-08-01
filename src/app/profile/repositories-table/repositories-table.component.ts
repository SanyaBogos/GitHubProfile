import { Component, OnInit, Input } from '@angular/core';
import { GitHubService } from "../../shared/services/git-hub.service";
import { Repository } from "../../shared/models/repository";
import { GlobalObjectsService } from "../../shared/services/global-objects.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-repositories-table',
  templateUrl: './repositories-table.component.html',
  styleUrls: ['./repositories-table.component.css']
})
export class RepositoriesTableComponent implements OnInit {

  @Input() userLogin: string;

  private p: number = 1;
  private itemPerPage: number = 10;
  private repositories: Repository[];
  private reposCount: number;
  private userReceivedSubscription: Subscription;

  constructor(
    private gitHubService: GitHubService,
    private globalObjectsService: GlobalObjectsService) { }

  ngOnInit() {
    this.getRepo(this.userLogin);

    this.userReceivedSubscription =
      this.globalObjectsService.user$
        .subscribe(data => {
          if (!data)
             return;
          
          this.getRepo(data.login);
        });
  }

  ngOnDestroy(): void {
    this.userReceivedSubscription.unsubscribe();
  }

  private getRepo(userLogin: string) {
    this.gitHubService.getRepositories(userLogin)
      .subscribe(data => {
        this.repositories = data;
        this.reposCount = data.length;
      });
  }

}
