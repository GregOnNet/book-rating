/* tslint:disable:no-unused-variable */

import { Book } from './book';

describe('Rating a book', () => {

  let book: Book;

  beforeEach(() => book = new Book('title', 'description') );

  it('rates not higher than 5', () => {
    book.rating = 5;
    book.rateUp();

    expect(book.rating).toEqual(5);
  });

  it('rates lower than 0', () => {
    book.rating = 0;
    book.rateDown();

    expect(book.rating).toEqual(0);
  });
});
