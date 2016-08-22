import { Component, OnInit } from '@angular/core';
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

  get booksCount(): number { return this.books.length; }

  constructor() { }

  ngOnInit(): void {
    this.books = [
      new Book('Angular 2', '<p>Angular</p> 2 kommt bald'),
      new Book('Aurelia', 'Die Konkurrenz =)')
    ];
  }

  // Methode
  count(): number {
    return this.books.length;
  }
}
