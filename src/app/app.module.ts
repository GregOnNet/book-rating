import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookModule } from './book';

import { AppComponent } from './app.component';
import { appRouting } from './app.routing';

@NgModule({
  declarations:    [AppComponent],
  entryComponents: [AppComponent],
  bootstrap:       [AppComponent]
  imports:         [BrowserModule, BookModule, appRouting],
})
export class AppModule { }
