import { Component } from '@angular/core';
import { filter } from '@nuvolar/shared/filter';

@Component({
  template: `<h1>{{title}}</h1>`,
})
export class CreateTripComponent {
  title = 'create-trip';

  filterFn() {
    console.log(filter([1, 4, 3, 4], 4));
  }
}
