import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Book } from '../shared/book';

@Component({
  selector: 'br-book-form',
  templateUrl: 'book-form.component.html',
  styleUrls: ['book-form.component.css']
})
export class BookFormComponent {

  @Output() created: EventEmitter<Book>;

  constructor() {
    this.created = new EventEmitter<Book>();
  }

  add(title: FormControl, description: FormControl) {
    this.created.emit(new Book(title.value, description.value));
    title.value = description.value = '';
  }
}
