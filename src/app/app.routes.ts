import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    // Lazy async modules
    { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
];

export const routing = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });
