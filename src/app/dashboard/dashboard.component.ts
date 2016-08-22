import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard', // <app-dashboard>
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books: Array<string>;

  constructor() { }

  ngOnInit() {
    this.books = ['Angular 2 kommt bald', 'AngularJS war mal.'];
  }
}
