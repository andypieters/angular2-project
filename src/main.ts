import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { APP_ROUTING } from './app/app.routing';
import {disableDeprecatedForms, provideForms, FORM_PROVIDERS} from '@angular/forms';
import { AppComponent, environment } from './app/';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
    APP_ROUTING, 
    HTTP_PROVIDERS, 
    disableDeprecatedForms(), 
    provideForms()
  ]);
