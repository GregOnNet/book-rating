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

  get count(): number { return this.books === undefined
                               ? 0
                               : this.books.length; }

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  add(book: Book) {
    this.books.push(book);
    this.booksService.create(book)
                     .subscribe( response => console.log(response));
  }

  reorderBooks(book?: Book) {
    this.books.sort((a, b) => b.rating - a.rating);

    if (book) {
      this.booksService.update(book)
                       .subscribe(response => console.log(response));
    }
  }

  deleteBook(book: Book) {
    this.booksService.delete(book)
                     .subscribe(_ =>  this.getBooks());
  }

  getBooks() {
    this.booksService.getAll()
            .subscribe(books => {
              this.books = books;
              this.reorderBooks();
            });
  }
}
