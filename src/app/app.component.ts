import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root', // <app-root>
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
  message = 'Wann ist Angular 2 endlich stabil? :)';
}
