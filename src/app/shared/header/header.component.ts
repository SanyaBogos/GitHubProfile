import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GitHubService } from "../services/git-hub.service";
import { GlobalObjectsService } from "../services/global-objects.service";
import { ModalComponent } from "../directives/modal/modal.component";
// import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild(ModalComponent)
  private readonly showErrorFindingModal: ModalComponent;
  private userName: string = '';

  constructor(
    private router: Router,
    private gitHubService: GitHubService,
    private globalObjectsService: GlobalObjectsService) { }

  ngOnInit() { }

  searchUser(keyCode: number) {
    if (keyCode == 13)
      this.gitHubService.getUser(this.userName)
        .subscribe(data => { this.globalObjectsService.announceUserSearched(data); },
        data => {
          this.showErrorFindingModal.show();
          this.globalObjectsService.announceUserSearched(null);
        });
  }

}
