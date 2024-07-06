import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutPage } from './layout.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },

      {
        path: 'characters',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },

      {
        path: 'episodes',
        loadChildren: () =>
          import('../episodes/episodes.module').then(
            (m) => m.EpisodesPageModule
          ),
      },
      {
        path: 'favorites',
        loadChildren: () =>
          import('../favorite-characters/favorite-characters.module').then(
            (m) => m.FavoriteCharactersPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutPageRoutingModule {}
