import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FosSchedulingEngineRoutingModule } from './app.routing';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FosSchedulingEngineRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
