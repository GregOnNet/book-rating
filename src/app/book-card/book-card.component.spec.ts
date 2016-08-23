/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BooCardkComponent } from './book-card.component';

describe('Component: Book', () => {
  it('should create an instance', () => {
    let component = new BookCardComponent();
    expect(component).toBeTruthy();
  });
});
