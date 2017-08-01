import { Routes, RouterModule } from '@angular/router';
import { MainProfileComponent } from "./main-profile/main-profile.component";

const routes: Routes = [
    { path: '', component: MainProfileComponent },
];

export const routing = RouterModule.forChild(routes);
