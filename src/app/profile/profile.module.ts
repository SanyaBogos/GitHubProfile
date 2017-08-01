import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainProfileComponent } from './main-profile/main-profile.component';
import { routing } from "./profile.routes";
import { SharedModule } from "../shared/shared.module";
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { RepositoriesTableComponent } from './repositories-table/repositories-table.component';
import { NgxPaginationModule } from 'ngx-pagination';
// import { NouisliderModule } from 'ng2-nouislider';

@NgModule({
  imports: [
    CommonModule, routing, SharedModule, Ng2TableModule, NgxPaginationModule
  ],
  declarations: [MainProfileComponent, RepositoriesTableComponent]
})
export class ProfileModule { }
