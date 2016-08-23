import { Component, ViewEncapsulation } from '@angular/core';
import { BookDashboardComponent } from './book-dashboard';

@Component({
  selector: 'app-root', // <app-root>
  templateUrl: 'app.component.html',
  styleUrls: ['bootstrap.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [BookDashboardComponent]
})
export class AppComponent {
  title = 'app works!';
  message = 'Wann ist Angular 2 endlich stabil? :)';
}
