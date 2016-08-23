import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-form',
  templateUrl: 'book-form.component.html',
  styleUrls: ['book-form.component.css']
})
export class BookFormComponent {
  form: FormGroup;
  book: Book;

  @Output() created: EventEmitter<Book>;

  constructor(private fb: FormBuilder) {
    this.book = new Book('', '');
    this.created = new EventEmitter<Book>();

    // Setup form
    this.form = this.fb.group({
      'isbn':        ['', Validators.required],
      'title':       ['', [Validators.required,
                           Validators.minLength(3)]],
      'description': ['', Validators.required]
    });
  }

  add() {
    let book = new Book(this.form.value.title,
                        this.form.value.description);

    book.isbn = this.form.value.isbn;

    this.created.emit(book);

    this.form.reset();
  }
}
