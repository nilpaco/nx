import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FosSchedulingEngineRoutingModule } from './app.routing';
import { NgModule } from '@angular/core';
import { SchedulingUiModule } from '@nuvolar/scheduling/ui';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FosSchedulingEngineRoutingModule, SchedulingUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
