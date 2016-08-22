import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard';

@Component({
  selector: 'app-root', // <app-root>
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [DashboardComponent]
})
export class AppComponent {
  title = 'app works!';
  message = 'Wann ist Angular 2 endlich stabil? :)';
}
