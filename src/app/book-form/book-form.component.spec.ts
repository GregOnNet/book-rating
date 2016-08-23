/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BookFormComponent } from './book-form.component';

describe('Component: BookForm', () => {
  it('should create an instance', () => {
    let component = new BookFormComponent();
    expect(component).toBeTruthy();
  });
});
