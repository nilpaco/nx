import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PortalRoutingModule } from './app.routing';

// import {  } from '@nuvolar/scheduling/ui';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PortalRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
