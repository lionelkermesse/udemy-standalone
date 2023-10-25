import {enableProdMode, importProvidersFrom} from '@angular/core';
import {environment} from './environments/environment';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {APP_ROUTES} from "./app/app.routing";
import {RouterModule} from "@angular/router";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
      importProvidersFrom(RouterModule.forRoot(APP_ROUTES))
  ]
});
