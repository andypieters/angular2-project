import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'spinner',
  template: `
    <i *ngIf="visible" class="fa fa-spinner fa-spin fa-3x"></i>
  `,
})
export class SpinnerComponent implements OnInit {
   @Input('visible') visible: boolean;

  constructor() { }

  ngOnInit() {
  }

}
