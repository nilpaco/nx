import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
		path: '',
        loadChildren: () =>
        import('@nuvolar/scheduling/timeline').then(
          (module) => module.SchedulingTimelineModule
        ),
	},
	{
		path: 'create-trip',
        loadChildren: () =>
        import('@nuvolar/scheduling/create-trip').then(
          (module) => module.SchedulingCreateTripModule
        ),
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled', relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class FosSchedulingEngineRoutingModule {}
