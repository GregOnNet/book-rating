import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BookCardComponent } from './book-card.component';
import { Book } from '../shared/book';

// Isolated Test
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

// Shallow Test
describe('Clicking the rate up button', () => {
  let fixture: ComponentFixture<BookCardComponent>;
  let card: BookCardComponent;
  let rateUp: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookCardComponent]
    });
    TestBed.compileComponents();

    fixture = TestBed.createComponent(BookCardComponent);
    card = fixture.componentInstance;
    card.book = new Book('Harry Potter', 'The Deathly Hallows');

    fixture.detectChanges();

    rateUp = fixture.debugElement.query(By.css('.glyphicon-thumbs-up'));
  }));

  it('increases the rating of the book', () => {
    rateUp.nativeElement.click();

    fixture.detectChanges();

    expect(card.book.rating).toBe(1);
  });
});
