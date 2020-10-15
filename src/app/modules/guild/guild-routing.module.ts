import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuildViewComponent } from './guild-view/guild-view.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/',
    data: {
      noSideNav: true
    }
  },
  {
    path: ':id',
    component: GuildViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuildRoutingModule {
}
