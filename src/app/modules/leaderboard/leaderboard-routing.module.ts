import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeaderboardNavComponent } from './leaderboard-nav/leaderboard-nav.component';
import { LeaderboardViewComponent } from './leaderboard-view/leaderboard-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'achievement-points'
  },
  {
    path: '',
    component: LeaderboardNavComponent,
    outlet: 'side-nav'
  },
  {
    path: ':id',
    component: LeaderboardViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaderboardRoutingModule {
}
