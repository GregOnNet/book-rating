import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Book } from '../shared/book';
import { BookComponent } from '../book';

@Component({
  selector: 'br-dashboard', // <app-dashboard>
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [BookComponent]
})
export class DashboardComponent implements OnInit {

  books: Array<Book>;

  get count(): number { return this.books.length; }

  constructor() { }

  ngOnInit(): void {
    this.books = [
      new Book('Angular 2', '<p>Angular</p> 2 kommt bald'),
      new Book('Aurelia', 'Die Konkurrenz =)')
    ];
  }

  add(title: FormControl, description: FormControl) {
    let book = new Book(title.value, description.value);
    this.books.push(book);

    title.value = description.value = '';
  }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
