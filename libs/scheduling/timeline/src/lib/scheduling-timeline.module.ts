import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TimelineComponent } from './scheduling-timeline.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: TimelineComponent}
    ]),
  ],
  declarations: [
    TimelineComponent
  ]
})
export class SchedulingTimelineModule {}
