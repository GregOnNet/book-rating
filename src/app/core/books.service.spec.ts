/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { BooksService } from './books.service';

describe('Service: Books', () => {
  beforeEach(() => {
    addProviders([BooksService]);
  });

  it('should ...',
    inject([BooksService],
      (service: BooksService) => {
        expect(service).toBeTruthy();
      }));
});
