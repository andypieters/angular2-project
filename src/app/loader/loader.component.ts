import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-loader',
  template: '<div class="loading">Loading&#8230;</div>',
  styleUrls: ['loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
