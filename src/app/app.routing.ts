import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
];

export const appRouting = RouterModule.forRoot(APP_ROUTES);
