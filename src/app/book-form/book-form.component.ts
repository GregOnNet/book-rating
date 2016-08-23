import { Component, Output, EventEmitter } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-book-form',
  templateUrl: 'book-form.component.html',
  styleUrls: ['book-form.component.css']
})
export class BookFormComponent {
  book: Book;

  @Output() created: EventEmitter<Book>;

  constructor() {
    this.book = new Book('', '');
    this.created = new EventEmitter<Book>();
  }

  add() {
    this.created.emit(this.book);
    this.book = new Book('', '');
  }
}
