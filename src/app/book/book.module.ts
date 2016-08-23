import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { bookRouting } from './book.routing';

import { BookDashboardComponent } from './book-dashboard';
import { BookDetailsComponent }   from './book-details';
import { BookCardComponent }      from './book-card';
import { BookFormComponent }      from './book-form';
import { BooksService }           from './core/books.service';

const moduleComponents = [BookDashboardComponent, BookDetailsComponent, BookCardComponent, BookFormComponent];

@NgModule({
  imports:      [CommonModule, FormsModule, ReactiveFormsModule, HttpModule, bookRouting],
  exports:      [...moduleComponents],
  declarations: [...moduleComponents],
  providers:    [BooksService]
})
export class BookModule { }
