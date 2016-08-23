import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { bookRouting } from './book.routing';

import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BooksService } from './core/books.service';

const moduleComponents = [BookDashboardComponent, BookCardComponent, BookFormComponent];

@NgModule({
  imports:      [CommonModule, FormsModule, ReactiveFormsModule, HttpModule, bookRouting],
  exports:      [...moduleComponents],
  declarations: [...moduleComponents],
  providers:    [BooksService]
})
export class BookModule { }
