import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookCardComponent } from '../book-card';

import { BooksService } from '../core/books.service';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-details',
  templateUrl: 'book-details.component.html',
  directives: [BookCardComponent]
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  book: Book;

  constructor(private route: ActivatedRoute,
              private books: BooksService) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.isbn = params['isbn']);

    this.books.getSingle(this.isbn).subscribe(book =>
      this.book = book);
  }
}
