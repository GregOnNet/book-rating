// app.routing.ts

import { RouterModule, Routes } from '@angular/router';
import { BookDashboardComponent } from './book-dashboard';

const BOOK_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard',  component: BookDashboardComponent},
];

export const bookRouting = RouterModule.forChild(BOOK_ROUTES);
