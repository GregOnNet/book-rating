import { Injectable } from '@angular/core';
import { Book } from '../shared/book';

@Injectable()
export class BooksService {

  getAll(): Array<Book> {
    return [
      new Book('Angular 2', '<p>Angular</p> 2 kommt bald'),
      new Book('Aurelia', 'Die Konkurrenz =)')
    ];
  }

}
