import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { GitHubService } from "./services/git-hub.service";
import { HttpModule, JsonpModule } from '@angular/http';
import { ApiService } from "./services/api.service";
import { GlobalObjectsService } from "./services/global-objects.service";
import { ModalComponent } from './directives/modal/modal.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule, JsonpModule
  ],
  declarations: [HeaderComponent, ModalComponent],
  exports: [HeaderComponent, FormsModule, ModalComponent]
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ApiService,
        GlobalObjectsService,
        GitHubService
      ]
    };
  }
}
