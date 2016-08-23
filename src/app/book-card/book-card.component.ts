import { Component,
         Input,
         Output,
         EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-card',
  templateUrl: 'book-card.component.html'
})
export class BookCardComponent {

  @Input() book: Book; // [book]=""
  @Output() rated: EventEmitter<Book>;
  @Output() deleted: EventEmitter<Book>;

  constructor() {
    this.rated = new EventEmitter<Book>();
    this.deleted = new EventEmitter<Book>();
  }

  rateUp() {
    this.book.rateUp();
    this.rated.emit(this.book);
  }

  rateDown() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }

  delete() {
    this.deleted.emit(this.book);
  }
}
