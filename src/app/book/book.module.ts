import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BooksService } from './core/books.service';

@NgModule({
  declarations: [BookDashboardComponent, BookCardComponent, BookFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpModule],
  exports: [BookDashboardComponent, BookCardComponent, BookFormComponent],
  providers: [BooksService]
})
export class BookModule { }
