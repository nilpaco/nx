import { CommonModule } from '@angular/common';
import { CreateTripComponent } from './scheduling-create-trip.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: CreateTripComponent}
    ]),
  ],
  declarations: [
    CreateTripComponent
  ]
})
export class SchedulingCreateTripModule {}
