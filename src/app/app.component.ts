import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {NavbarComponent} from './navbar';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  directives: [NavbarComponent, ROUTER_DIRECTIVES],
  template: `
  <app-navbar></app-navbar>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  
}
