import { BookCardComponent } from './book-card.component';
import { Book } from '../shared/book';

describe('Rating a book up', () => {
  let card: BookCardComponent;

  beforeEach(() => {
    card = new BookCardComponent();
    card.book = new Book('Harry Potter', 'The Deathly Hallows');
  });

  it('increases the rating', () => {
    card.rateUp();
    expect(card.book.rating).toBe(1);
  });
});
