import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainNavComponent } from './shared/components/main-nav/main-nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RouteNotFoundComponent } from './shared/components/route-not-found/route-not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'player',
        loadChildren: () => import('./modules/player/player.module').then(m => m.PlayerModule)
      },
      {
        path: 'guild',
        loadChildren: () => import('./modules/guild/guild.module').then(m => m.GuildModule)
      },
      {
        path: 'leaderboard',
        loadChildren: () => import('./modules/leaderboard/leaderboard.module').then(m => m.LeaderboardModule)
      }
    ]
  },
  {
    path: '',
    component: MainNavComponent,
    outlet: 'main-nav'
  },
  {
    path: '',
    component: FooterComponent,
    outlet: 'footer'
  },
  {
    path: '**',
    children: [
      {
        path: '',
        component: RouteNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
