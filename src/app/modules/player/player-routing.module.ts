import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerNavComponent } from './player-nav/player-nav.component';
import { PlayerViewComponent } from './player-view/player-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  },
  {
    path: '',
    component: PlayerNavComponent,
    outlet: 'side-nav'
  },
  {
    path: ':id',
    component: PlayerViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayerRoutingModule {
}
