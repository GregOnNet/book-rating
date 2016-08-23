/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { BookDashboardComponent } from './book-dashboard.component';

describe('Component: Dashboard', () => {
  it('should create an instance', () => {
    let component = new BookDashboardComponent();
    expect(component).toBeTruthy();
  });
});
