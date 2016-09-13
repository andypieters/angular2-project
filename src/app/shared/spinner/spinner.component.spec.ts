/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';

describe('Component: Spinner', () => {
  it('should create an instance', () => {
    let component = new SpinnerComponent();
    expect(component).toBeTruthy();
  });
});
