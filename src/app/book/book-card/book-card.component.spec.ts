import { BookCardComponent } from './book-card.component';
import { Book } from '../shared/book';

describe('Rating a book', () => {
  let card: BookCardComponent;

  beforeEach(() => {
    card = new BookCardComponent();
    card.book = new Book('Harry Potter', 'The Deathly Hallows');
  });

  describe('up', () => {
    it('increases the rating', () => {
      card.rateUp();
      expect(card.book.rating).toBe(1);
    });
  });

  describe('down', () => {
    it('decreases the rating', () => {
      card.rateDown();
      expect(card.book.rating).toBe(0);
    });
  });
});
