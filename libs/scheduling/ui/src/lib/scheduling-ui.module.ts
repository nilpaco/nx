import { CommonModule } from '@angular/common';
import { HeaderComponent } from './scheduling-header.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class SchedulingUiModule {}
