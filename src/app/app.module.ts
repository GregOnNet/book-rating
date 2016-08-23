import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookModule } from './book';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BookModule],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
