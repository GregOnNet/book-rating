import { RouterModule, Routes }   from '@angular/router';

import { BookDashboardComponent } from './book-dashboard';
import { BookDetailsComponent }   from './book-details';

const BOOK_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard',  component: BookDashboardComponent},
  { path: 'book/:isbn', component: BookDetailsComponent }
];

export const bookRouting = RouterModule.forChild(BOOK_ROUTES);
