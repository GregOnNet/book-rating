import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Book } from '../shared/book';

@Injectable()
export class BooksService {

  api: string;
  jsonHeader: Headers;

  constructor(private http: Http) {
    this.api = 'http://book-monkey2-api.angular2buch.de';

    this.jsonHeader = new Headers();
    this.jsonHeader.append('Content-Type', 'application/json');
  }

  getAll(): Observable<Book[]> {
    return this.http.get(`${this.api}/books`)
               .map(response => response.json()) // JSON Bücher
               .map(rawBooks => rawBooks.map(r => new Book(r.title, r.description, r.rating)));
  }

  create(book: Book) {
    return this.http.post(`${this.api}/book`,
                          JSON.stringify(book),
                          { headers: this.jsonHeader });
  }
}
