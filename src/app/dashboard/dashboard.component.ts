import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookComponent } from '../book';
import { BooksService } from '../core/books.service';

@Component({
  selector: 'br-dashboard', // <app-dashboard>
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [BookComponent]
})
export class DashboardComponent implements OnInit {

  books: Array<Book>;

  get count(): number { return this.books.length; }

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.books = this.booksService.getAll();
  }

  add(book: Book) { this.books.push(book); }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
